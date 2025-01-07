import { Post } from '@/components/common';
import { PostForm, Tab } from '@/components/Home';

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
