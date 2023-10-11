import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schema/account.schema';
import dotenv from 'dotenv';
import { Salt, SaltSchema } from './schema/salt.schema';
import { DecodeTokenMiddleware } from './middleware/jwt-middleware';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Account.name,
        schema: AccountSchema,
      },
      {
        name: Salt.name,
        schema: SaltSchema,
      },
    ]),
    JwtModule.register({
      secret: process.env.SECRET,
    }),
  ],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DecodeTokenMiddleware)
      .forRoutes(
        { path: '/account', method: RequestMethod.PATCH },
        { path: '/account', method: RequestMethod.DELETE },
        { path: '/account/get/:uuid', method: RequestMethod.GET }
      );
  }
}
