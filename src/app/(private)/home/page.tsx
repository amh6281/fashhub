import { Post, PostForm, Tab } from '@/components/Home';

const Home = () => {
  return (
    <div className=''>
      <Tab />
      <PostForm />
      <Post />
    </div>
  );
};

export default Home;
