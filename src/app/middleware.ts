// middleware 라는 프리픽스는 Next에서 제공, 페이지보다 먼저 실행되어 접근 등 권한 관리
// auth.ts가 미들웨어 역할
export { auth as middleware } from '../auth';

// 적용할 라우트 (로그인을 해야만 접근 가능한 라우트)
export const config = {
  matcher: ['/compose/post', '/home', '/explore', '/messages', '/search'],
};
