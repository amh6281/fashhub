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
  http.get(`${baseUrl}/api/users/:userId/posts`, ({ params }) => {
    const { userId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: user,
        content: `${1} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: user,
        content: `${2} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: user,
        content: `${3} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: user,
        content: `${4} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: user,
        content: `${5} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get(`${baseUrl}/api/users/:userId`, ({ params }) => {
    const { userId } = params;
    const found = [user].find((v) => v.userId === Number(userId));
    if (found) {
      return HttpResponse.json(found);
    }
    return HttpResponse.json(
      { message: 'no_such_user' },
      {
        status: 404,
      },
    );
  }),
  http.get(`${baseUrl}/api/trends`, () => {
    return HttpResponse.json([
      { tagId: 1, title: '청자켓', count: 1264 },
      { tagId: 2, title: '데님 팬츠', count: 1264 },
      { tagId: 3, title: '라이더 자켓', count: 1264 },
      { tagId: 4, title: '남성 헬스복', count: 1264 },
      { tagId: 5, title: '와이드 데님', count: 1264 },
      { tagId: 6, title: '목폴라 티', count: 1264 },
      { tagId: 7, title: '셔츠', count: 1264 },
    ]);
  }),
  http.get(`${baseUrl}/api/followRecommends`, () => {
    return HttpResponse.json([user]);
  }),
  http.get(`${baseUrl}/api/posts/:postId`, ({ params }) => {
    const { postId } = params;
    if (parseInt(postId as string) > 10) {
      return HttpResponse.json(
        { message: 'no_such_post' },
        {
          status: 404,
        },
      );
    }
    return HttpResponse.json({
      postId,
      User: user,
      content: `${1} 게시글 아이디 ${postId}의 내용`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    });
  }),
];
