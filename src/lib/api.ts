import { baseUrl } from '@/config';
import { PostType } from '@/types/Post';
import { SearchQueryKey } from '@/types/SearchQuery';
import { UserType } from '@/types/User';
import { QueryFunction } from '@tanstack/react-query';

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

export const getSearchResult: QueryFunction<
  PostType[],
  SearchQueryKey
> = async ({ queryKey }) => {
  const [, , searchQuery] = queryKey;
  const res = await fetch(
    `${baseUrl}/api/search/${searchQuery.query}?${searchQuery.toString()}`, // searchQuery.toString은 filter, pf 등 query 제외 나머지 값
    {
      next: {
        tags: ['posts', 'search', searchQuery.query], // 객체 형태의 Tag는 불가
      },
      cache: 'no-store',
    },
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
// queryKey params는 useQuery 사용 시 자동으로 들어가는 값

export const getTrends = async () => {
  const res = await fetch(`${baseUrl}/api/trends`, {
    next: {
      tags: ['trends'],
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const getFollowRecommends = async () => {
  const res = await fetch(`${baseUrl}/api/followRecommends`, {
    next: {
      tags: ['users', 'followRecommends'],
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const getUser: QueryFunction<UserType, [string, string]> = async ({
  queryKey,
}) => {
  const [, username] = queryKey;
  const res = await fetch(`${baseUrl}/api/users/${username}`, {
    next: {
      tags: ['users', username],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const getUserPosts: QueryFunction<
  PostType[],
  [string, string, string]
> = async ({ queryKey }) => {
  const [, , username] = queryKey;
  const res = await fetch(`${baseUrl}/api/users/${username}/posts?cursor=0`, {
    next: {
      tags: ['posts', 'users', username],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

// QueryFunction or {queryKey: [string, string]} 형태로 사용 가능
export const getSinglePost = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [, postId] = queryKey;
  const res = await fetch(`${baseUrl}/api/posts/${postId}`, {
    next: {
      tags: ['posts', postId],
    },
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getComments: QueryFunction<
  PostType[],
  [string, string, string]
> = async ({ queryKey }) => {
  const [, postId] = queryKey;
  const res = await fetch(`${baseUrl}/api/posts/${postId}/comments`, {
    next: {
      tags: ['posts', postId, 'comments'],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
