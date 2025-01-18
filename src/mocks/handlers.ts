import { http, HttpResponse } from 'msw';
import { baseUrl } from '@/config';

export const handlers = [
  http.post(`${baseUrl}/api/login`, () => {
    return HttpResponse.json(
      {
        userId: 1,
        fullname: '홍길동',
        username: 'test',
      },
      {
        headers: {
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
        },
      },
    );
  }),
  http.post(`${baseUrl}/api/logout`, () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  http.post(`${baseUrl}/api/users`, async () => {
    console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    });
  }),
];
// 서버가 클라이언트 브라우저에 connect.sid라는 이름의 쿠키를 설정, 값을 msw-cookie로 지정
