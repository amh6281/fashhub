import { baseUrl } from '@/config';
import { PostType } from '@/types/Post';
import { SearchQueryKey } from '@/types/SearchQuery';
import { UserType } from '@/types/User';
import { QueryFunction } from '@tanstack/react-query';

export const getPostRecommends = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const res = await fetch(
    `${baseUrl}/api/posts/recommends?cursor=${pageParam}`,
    {
      next: {
        tags: ['posts', 'recommends'], // 캐싱 업데이트 시 필요한 태그 (서버 캐싱, react-query 캐싱 아님)
      },
      cache: 'force-cache', // 서버사이드 렌더링 시 캐싱 사용, invalidate 시 데이터 다시 요청
    },
  );

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const getFollowingPosts = async () => {
  const res = await fetch(`${baseUrl}/api/posts/followings`, {
    next: {
      tags: ['posts', 'followings'], // 캐싱 업데이트 시 필요한 태그 (서버 캐싱, react-query 캐싱 아님)
    },
    credentials: 'include',
    cache: 'force-cache',
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
  const urlSearchParams = new URLSearchParams(searchQuery);
  const res = await fetch(
    `${baseUrl}/api/posts?${urlSearchParams.toString()}`, // searchQuery.toString은 filter, pf 등 query 제외 나머지 값
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
  const res = await fetch(`${baseUrl}/api/hashtags/trends`, {
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
  const res = await fetch(`${baseUrl}/api/users/followRecommends`, {
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

export const createPost = async (formData: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    method: 'post',
    credentials: 'include',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Failed to create post');
  }

  return res.json();
};

export const createHeart = async (postId: number) => {
  const res = await fetch(`${baseUrl}/api/posts/${postId}/heart`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to create heart');
  }

  return res.json();
};
