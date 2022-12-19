interface Media {
  id: string;
  type: string;
  url: string;
  thumbnail?: string;
}

export interface Chat {
  text: string;
  timestamp: number;
  media?: Media[];
}
