interface PostArticleProps {
  children: React.ReactNode;
  post: Post;
}

const PostArticle = ({ children, post }: PostArticleProps) => {
  return <div>PostArticle</div>;
};

export default PostArticle;
