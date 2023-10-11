import {
  BadRequestException,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schema/account.schema';
import { Model } from 'mongoose';
import { Salt } from './schema/salt.schema';
import { LoginDto } from './dto/login.dto';
import {
  DeleteAccountDto,
  GetAccountDto,
  UpdateAccountDto,
} from './dto/account.dto';
import { RegisterDto } from './dto/register.dto';
import { v4 } from 'uuid';
import { pbkdf2Sync, randomBytes } from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    @InjectModel(Salt.name) private saltModel: Model<Salt>,
    private jwtService: JwtService,
  ) {}

  async login(body: LoginDto) {
    let data = await this.accountModel.findOne({
      username: body.username,
    });
    if (!data) throw new BadRequestException('Invalid Credentials');
    let saltData = await this.saltModel.findOne({
      account: data.uuid,
    });
    let verify = pbkdf2Sync(
      body.password,
      saltData.salt,
      9000,
      64,
      'sha512',
    ).toString('hex');
    if (data.password !== verify)
      throw new UnauthorizedException('Invalid Credentials');

    let userToken = {
      uuid: data.uuid,
      username: data.username,
      iss: process.env.ISS,
      aud: process.env.AUD,
    };
    let token = this.jwtService.sign(userToken, {
      secret: process.env.SECRET,
    });
    return { token };
  }

  async register(body: RegisterDto) {
    let randomString = randomBytes(32).toString('hex');
    let accountExist = await this.accountModel.findOne({
      username: body.username,
    });
    if (accountExist) throw new BadRequestException('Username Already Exist');
    let hashPass = pbkdf2Sync(
      body.password,
      randomString,
      9000,
      64,
      'sha512',
    ).toString('hex');
    let queryAccount = {
      uuid: v4(),
      username: body.username,
      password: hashPass,
    };
    let querySalt = {
      account: queryAccount.uuid,
      salt: randomString,
    };
    let userData = await this.accountModel.create(queryAccount);
    await this.saltModel.create(querySalt);

    let userToken = {
      uuid: userData.uuid,
      username: userData.username,
      iss: process.env.ISS,
      aud: process.env.AUD,
    };
    let token = this.jwtService.sign(userToken, {
      secret: process.env.SECRET,
    });
    return { token };
  }

  async updateAccount(body: UpdateAccountDto, uuid: string) {
    if (body.oldPassword) {
      if (!body.newPassword)
        throw new BadRequestException(
          'New Password is Required if Old Password is Provided',
        );
    }
    if (body.newPassword) {
      if (!body.oldPassword)
        throw new BadRequestException(
          'Old Password is Required if New Password is Provided',
        );
    }
    let userData = await this.accountModel.findOne({
      uuid: body.uuid,
    });
    if (!userData) throw new BadRequestException('Invalid Account');
    let saltData = await this.saltModel.findOne({
      account: userData.uuid,
    });
    let verify = pbkdf2Sync(
      body.oldPassword,
      saltData.salt,
      9000,
      64,
      'sha512',
    ).toString('hex');
    if (verify !== userData.password)
      throw new UnauthorizedException('Invalid Credentials');
    let randomString = randomBytes(32).toString('hex');
    saltData.salt = randomString;
    await saltData.save();
    let newHash = pbkdf2Sync(
      body.newPassword,
      randomString,
      9000,
      64,
      'sha512',
    ).toString('hex');
    userData.password = newHash;
    await userData.save();

    let userToken = {
      uuid: userData.uuid,
      username: userData.username,
      iss: process.env.ISS,
      aud: process.env.AUD,
    };
    let token = this.jwtService.sign(userToken, {
      secret: process.env.SECRET,
    });
    return { token };
  }

  async deleteAccount(uuid: string) {
    let userData = await this.accountModel.findOne({
      uuid: uuid,
    });
    if (!userData) throw new BadRequestException('Invalid Account');
    await this.accountModel.deleteOne({ uuid: uuid });
    await this.saltModel.deleteOne({ account: userData.uuid });
    return 'OK';
  }

  async getAccountData(body: GetAccountDto) {
    let userData = await this.accountModel
      .findOne({
        uuid: body.uuid,
      })
      .select(['-password', '-_id'])
      .lean();
    if (!userData) throw new BadRequestException('Invalid Account');
    userData['created_at'] = new Date(userData['created_at']).valueOf();
    userData['updated_at'] = new Date(userData['updated_at']).valueOf();

    return userData;
  }
}
