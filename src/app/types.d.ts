export interface ComponentInterface {
  shortUrl: string;
  fullUrl: string;
  _id: string;
  buttonCallBack: (shortUrl : string) => void;
}


