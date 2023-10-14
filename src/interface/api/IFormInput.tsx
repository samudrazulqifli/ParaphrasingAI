export interface IFormInput {
  username: string;
  name: string;
  password: string;
}
export interface Responses {
  text: string;
}

export interface SummarizeInput {
  query: string;
  type: string;
}

export interface ResultForm {
  data: Responses[]
}
