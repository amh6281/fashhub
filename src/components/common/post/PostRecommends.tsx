'use client';

import { getPostRecommends } from '@/lib/api';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import Post from './Post';
import { PostType } from '@/types/Post';
import Error from 'next/error';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const PostRecommends = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    PostType[],
    Error,
    InfiniteData<PostType[]>,
    [string, string],
    number
  >({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // fresh에서 stale로 전환되는 시간 (1분)
    gcTime: 5 * 60 * 1000, // 캐시에 저장된 데이터가 제거되는 시간 (5분)
    initialPageParam: 0, // cursor 초기값
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId, // 3씩 증가
  });

  useEffect(() => {
    if (inView) {
      if (!isFetching && hasNextPage) {
        fetchNextPage();
      }
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
};

export default PostRecommends;
