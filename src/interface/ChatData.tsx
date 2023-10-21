export interface ChatData {
  from: string;
  message: string;
}

export interface BodyChat {
  dataChat: ChatData[];
  ref: React.RefObject<HTMLDivElement>;
}