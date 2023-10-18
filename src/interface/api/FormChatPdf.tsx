export interface RegisterQuestion {
  src: string;
  messages: string;
  referenceSources: boolean;
}

export interface ResponseQuestion {
  content: string;
}

export interface RegisterQuestionByUrl {
  url: string;
  title: string;
}

export interface RegisterByUpload {
  file: File;
}

export interface ResponseUpload {
  sourceId: string;
}
