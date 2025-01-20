import { baseUrl } from '@/config';

export const getRecommendedPosts = async () => {
  const res = await fetch(`${baseUrl}/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommend'], // 캐싱 업데이트 시 필요한 태그
    },
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
