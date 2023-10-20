export interface DataCardTextProps {
  title1: string;
  title2: string;
  link: string;
  button: string;
  form: any;
  data: any;
  option: Option[];
  selected: any;
  loading: React.ReactNode;
  status: boolean;
}
export interface Option {
  option: string;
}
