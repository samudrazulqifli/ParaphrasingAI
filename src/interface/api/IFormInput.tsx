export interface IFormRegister {
  username: string;
  name: string;
  password: string;
}

export interface IFormLogin {
  username: string;
  password: string;
}

export interface IFormDelete {
  uuid: string;
}

export interface Responses {
  text: string;
}

export interface SummarizeInput {
  query: string;
  type: string;
}

export interface ResultForm {
  data: Responses[];
}

export interface IFormPassword {
  oldPassword: string;
  newPassword: string;
  uuid: string;
}
