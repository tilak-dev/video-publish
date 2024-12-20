export interface VideoCardType {
  _id?: string;
  videoFile?: string;
  thumbnail?: string;
  views?: string;
  title: string;
  description?: string;
  duration?: number;
  createdAt?: string;
  uploadedAt?: string;
  owner?: {
    _id?: string;
    fullName?: string;
    username?: string;
    avatar?: string;
  };
  isPublic?: boolean;
  likes?:number
}

export interface DashboardStats {
  _id?: string;
  totalVideos?: number;
  totalViews: number;
  totalLikes: number;
  totalSubscribers: number;
}
export interface DashboardVideo {
  _id?: string;
  videoFile?: string;
  thumbnail: string;
  title: string;
  description?: string;
  duration?: string;
  views?: number;
  isPublic?: true;
  owner?: string;
  createdAt?: string;
  updatedAt?: true;
}

export interface CurrentUser {
  _id?: string;
  username?: string;
  email?: string;
  fullName?: string;
  avatar?: string;
  coverImage?: string;
  watchHistory?: [];
}