export interface VideoCardType {
  _id?: string;
  videoFile?: string;
  thumbnail: string;
  views: string;
  title: string;
  description?: string;
  duration?: number;
  createdAt?: string;
  uploadedAt?: string;
  owner:{
    _id?: string;
    name?: string;
    username?: string;
    avatar?: string;
  }
}
