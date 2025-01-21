'use client';

import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface RQProviderProps {
  children: React.ReactNode;
}

const RQProvider = ({ children }: RQProviderProps) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false, // 다른 탭 갔다가 돌아오면 다시 가져올 것인가 (탭 전환)
          retryOnMount: true, // 컴포넌트가 마운트 됐을때 다시 가져올 것인가
          refetchOnReconnect: false, // 인터넷 연결이 다시 연결됐을때 다시 가져올 것인가
          retry: false, // 데이터를 가져오는데 실패했을 때 재시도 할 것인가 (에러페이지 처리하기 위해 false처리)
        },
      },
    }),
  );
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
      />
    </QueryClientProvider>
  );
};

export default RQProvider;
