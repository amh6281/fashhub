import { baseUrl } from '@/config';

export const getPostRecommends = async () => {
  const res = await fetch(`${baseUrl}/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'], // 캐싱 업데이트 시 필요한 태그 (서버 캐싱, react-query 캐싱 아님)
    },
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const getFollowingPosts = async () => {
  const res = await fetch(`${baseUrl}/api/followingPosts`, {
    next: {
      tags: ['posts', 'followings'], // 캐싱 업데이트 시 필요한 태그 (서버 캐싱, react-query 캐싱 아님)
    },
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
