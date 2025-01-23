import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';
import { baseUrl } from '@/config';

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const user = {
  userId: 1,
  fullname: '홍길동',
  username: 'test',
};

export const handlers = [
  http.post(`${baseUrl}/api/login`, () => {
    return HttpResponse.json(user, {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    });
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
  http.get(`${baseUrl}/api/postRecommends`, () => {
    return HttpResponse.json([
      {
        postId: 1,
        User: user,
        content: `${1} Recommend post`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: user,
        content: `${2} Recommend post`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: user,
        content: `${3} Recommend post`,
        Images: [],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get(`${baseUrl}/api/followingPosts`, () => {
    return HttpResponse.json([
      {
        postId: 1,
        User: user,
        content: `${1} Following post`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: user,
        content: `${2} Following post`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: user,
        content: `${3} Following post`,
        Images: [],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get(`${baseUrl}/api/search/:tag`, ({ params }) => {
    const { tag } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: user,
        content: `${1} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: user,
        content: `${2} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: user,
        content: `${3} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: user,
        content: `${4} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: user,
        content: `${5} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
];
