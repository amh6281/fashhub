'use client';

import { Suspense, use } from 'react';
import { handlers } from '@/mocks/handlers';

const mockingEnabledPromise =
  typeof window !== 'undefined'
    ? // 브라우저 환경에서만 MSW 활성화 @/mocks/browser
      import('@/mocks/browser').then(async ({ default: worker }) => {
        // 프로덕션 환경에서는 모킹 비활성화
        if (
          process.env.NODE_ENV === 'production' ||
          process.env.MSW_ENABLED === 'false'
        ) {
          return;
        }

        // Next.js 내부 요청(_next 관련)은 무시
        await worker.start({
          onUnhandledRequest(request, print) {
            if (request.url.includes('_next')) {
              return;
            }
            print.warning();
          },
        });

        // 모킹 핸들러 등록
        worker.use(...handlers);

        // HMR 시 워커 중단 (Next에서 HMR 시 잘 안돌아가는 이슈가 있어서 강제 중단)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (module as any).hot?.dispose(() => {
          worker.stop();
        });
        console.log(worker.listHandlers());
      })
    : Promise.resolve();

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
}
function MSWProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // mockingEnabledPromise 결과 기다리는 use 훅
  // MSW가 활성화될 때까지 자식 컴포넌트를 렌더링하지 않고, 준비되면 자식 컴포넌트를 렌더링
  use(mockingEnabledPromise);
  return children;
}

// Layout 컴포넌트에서 MSWProvider로 감싸기 때문에 brower 환경만 추가
