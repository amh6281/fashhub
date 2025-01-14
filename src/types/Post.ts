export interface PostType {
  postId: number;
  content: string;
  User: {
    id: string;
    nickname: string;
    image: string;
  };
  createdAt: Date;
  Images: any[];
}
