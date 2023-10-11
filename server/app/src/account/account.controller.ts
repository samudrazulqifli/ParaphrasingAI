import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import {
  DeleteAccountDto,
  GetAccountDto,
  UpdateAccountDto,
} from './dto/account.dto';
import { AccountService } from './account.service';
import requestWithUserToken from './interface/request-with-user.interface';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('register')
  async register(@Body() body: RegisterDto, @Res() res: Response) {
    let data = await this.accountService.register(body);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data,
    });
  }

  @Post('login')
  async login(@Body() body: LoginDto, @Res() res: Response) {
    let data = await this.accountService.login(body);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Patch('')
  async updateAccount(
    @Body() body: UpdateAccountDto,
    @Res() res: Response,
    @Req() req: requestWithUserToken,
  ) {
    let data = await this.accountService.updateAccount(body, req.user.uuid);
    return res.status(HttpStatus.OK).json({
      satusCode: HttpStatus.OK,
      data,
    });
  }

  @Delete('')
  async deleteAccount(
    @Body() body: DeleteAccountDto,
    @Res() res: Response,
    @Req() req: requestWithUserToken,
  ) {
    let data = await this.accountService.deleteAccount(req.user.uuid);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Get('get/:uuid')
  async getAccountData(@Param() param: { uuid: string }, @Res() res: Response) {
    let data = await this.accountService.getAccountData(param);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }
}
