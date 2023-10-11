import { QueryPSTEnum } from '../enum/pst.enum';

export class QueryPstInterface {
  uuid: string;
  userUuid: string;
  queryUuid?: string;
  messages: string;
  result: string;
  type: QueryPSTEnum;
}
