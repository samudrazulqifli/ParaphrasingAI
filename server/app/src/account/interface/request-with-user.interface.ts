import { Request } from 'express';

export default interface requestWithUserToken extends Request {
  user: {
    uuid: string;
    username: string;
  };
  token: string;
}
