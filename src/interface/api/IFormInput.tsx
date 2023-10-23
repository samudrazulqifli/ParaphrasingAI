import { Option } from "../DataCardText";

export interface IFormRegister {
  username: string;
  name: string;
  password: string;
}

export interface IFormLogin {
  username: string;
  password: string;
  rememberme: false;
}

export interface IFormDelete {
  uuid: string;
}

export interface Responses {
  text: string;
}

export interface SummarizeInput {
  query: Option;
  type: string;
}

export interface ParaphraseInput {
  query: string;
  style: Option;
}

export interface ImprovementInput {
  query: string;
  intent: string;
}

export interface ResultForm {
  data: Responses[];
}

export interface ResultForm2 {
  suggestions: Responses[];
}
export interface IFormPassword {
  oldPassword: string;
  newPassword: string;
  uuid: string;
}
