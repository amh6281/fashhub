// middleware 라는 프리픽스는 Next에서 제공, 페이지보다 먼저 실행되어 접근 등 권한 관리
// auth.ts가 미들웨어 역할
// export { auth as middleware } from '@/auth';

import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { baseUrl } from './config';

export const middleware = async (request: NextRequest) => {
  const session = await auth();
  if (
    ['/compose/tweet', '/home', '/explore', '/messages', '/search'].includes(
      request.nextUrl.pathname,
    ) &&
    !session
  ) {
    return NextResponse.redirect(`${baseUrl}/flow/login`);
  }
  //  if (
  //    request.nextUrl.pathname.startsWith('/admin') &&
  //    session?.userData.role !== 'admin'
  //  ) {
  //    return NextResponse.redirect(
  //      'http://localhost:3000/권한없음_알리는_모달_주소',
  //    );
  //  }
};
