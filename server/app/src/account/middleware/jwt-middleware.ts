import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { decodeToken } from 'src/account/middleware/jwt-decode';
import requestWithUserToken from 'src/account/interface/request-with-user.interface';

@Injectable()
export class DecodeTokenMiddleware implements NestMiddleware {
  constructor() {}

  async use(req: requestWithUserToken, _res: Response, next: NextFunction) {
    const bearerToken = req.headers['authorization'];
    // if (!bearerToken) throw new UnauthorizedException();
    if (!bearerToken) throw new UnauthorizedException();

    const token = bearerToken.split(' ')[1];
    const checkToken = await decodeToken(token);
    if (!checkToken.validateStatus) throw new UnauthorizedException();
    req.user = checkToken.user;
    req.token = token;

    // if (process.env.NODE_ENV === 'development') console.log(req.user);
    next();
  }
}
