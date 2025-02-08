import { PostImageType } from './PostImage';
import { UserType } from './User';

export interface PostType {
  postId: number;
  content: string;
  User: UserType;
  createdAt: Date;
  Images: PostImageType[];
  Hearts: { userId: string }[];
  Reposts: { userId: string }[];
  Comments: { userId: string }[];
  _count: {
    Hearts: number;
    Reposts: number;
    Comments: number;
  };
}
