'use client';

import { getSearchResult } from '@/lib/api';
import { PostType } from '@/types/Post';
import { useQuery } from '@tanstack/react-query';
import Error from 'next/error';
import { Post } from '../common/post';
import { SearchQuery, SearchQueryKey } from '@/types/SearchQuery';

interface SearchResultProps {
  searchQuery: SearchQuery;
}

const SearchResult = ({ searchQuery }: SearchResultProps) => {
  const { data } = useQuery<
    PostType[], // queryFn의 반환값
    Error, // queryFn 실패 시 에러 반환 타입
    PostType[], // queryFn 성공 시 반환하는 데이터 타입
    // [_1: string, _2: string, SearchResultProps['searchQuery']] // 1) queryKey 타입
    SearchQueryKey // 2) queryKey 타입
  >({
    queryKey: ['posts', 'search', searchQuery],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
};

export default SearchResult;
