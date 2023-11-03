export interface Response {
  text: string;
}

export interface ResponseData {
  statusCode: number;
  data: Response[];
}

export interface ResponseListBook {
  created_at: string;
  src: string;
  title: string;
  updated_at: string;
  userUuid: string;
}

export interface ResponseGetAccount {
  username: string;
  name: string;
}
