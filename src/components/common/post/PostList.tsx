'use client';

import { useCurrentTab } from '@/store/tab';
import PostRecommends from './PostRecommends';
import FollowingPosts from './FollowingPosts';

const PostList = () => {
  const activeTab = useCurrentTab((state) => state.activeTab);

  if (activeTab === 'rec') return <PostRecommends />;
  if (activeTab === 'fol') return <FollowingPosts />;
};

export default PostList;
