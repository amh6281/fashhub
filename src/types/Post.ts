import { PostImageType } from './PostImage';
import { UserType } from './User';

export interface PostType {
  postId: number;
  content: string;
  User: UserType;
  createdAt: Date;
  Images: PostImageType[];
}
