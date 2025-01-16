import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { baseUrl } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const SignUpModal = () => {
  // const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    'use server';

    if (!formData.get('email')) return { message: 'no_id' };
    if (!formData.get('password')) return { message: 'no_password' };
    if (!formData.get('name')) return { message: 'no_name' };
    if (!formData.get('nickname')) return { message: 'no_nickname' };

    let shouldRedirect = false;
    try {
      const res = await fetch(`${baseUrl}/api/users}`, {
        method: 'post',
        body: formData,
        credentials: 'include', // 쿠키 전달 (계정 있는 경우 회원가입X) / 동일 출처, 교차 출처 요청 전송
      });
      console.log(res.status);
      if (res.status === 403) return { message: 'user_exists' };
      shouldRedirect = true;
    } catch (err) {
      console.error(err);
    }
    if (shouldRedirect) redirect('/login');
  };

  return (
    <Card className='relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
      <CardHeader>
        <div className='mb-8 flex justify-center'>
          <Image
            src='/logo.png'
            alt='Fashhub Logo'
            width={150}
            height={150}
            className='object-contain'
          />
        </div>
        <CardTitle className='text-center text-xl font-bold'>
          가입하기
        </CardTitle>
        <CardDescription className='text-center text-sm text-gray-500'>
          Fashhub에 가입하고 나만의 스타일을 친구들과 공유하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className='mt-4'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4 flex flex-col gap-2'>
            <Input
              type='email'
              placeholder='이메일 주소'
              name='email'
              required
            />
            <Input
              type='password'
              placeholder='비밀번호'
              name='password'
              required
            />
            <Input type='text' placeholder='성명' name='name' required />
            <Input
              type='text'
              placeholder='사용자 이름'
              name='nickname'
              required
            />
          </div>
          <Button type='submit' className='h-10 w-full px-6 py-3 text-white'>
            회원가입
          </Button>
        </form>
        <p className='mt-6 text-center text-sm text-gray-600'>
          계정이 있으신가요?{' '}
          <Link
            href='/login'
            className='font-medium text-[#0095f6] hover:underline'
          >
            로그인
          </Link>
        </p>
      </CardContent>
      <button
        className='absolute right-3 top-3 text-gray-400 hover:text-gray-600'
        aria-label='Close'
        // onClick={() => router.back()}
      >
        ✕
      </button>
    </Card>
  );
};

export default SignUpModal;
