import { Option } from "../DataCardText";

export interface IFormRegister {
  username: string;
  name: string;
  password: string;
}

export interface IFormLogin {
  username: string;
  password: string;
}
export interface Responses {
  text: string;
}

export interface SummarizeInput {
  query: Option;
  type: string;
}

export interface ResultForm {
  data: Responses[];
}
