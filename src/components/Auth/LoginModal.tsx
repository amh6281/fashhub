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
import Image from 'next/image';
import Link from 'next/link';

const LoginModal = () => {
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
        <CardTitle className='text-center text-xl font-bold'>로그인</CardTitle>
        <CardDescription className='text-center text-sm text-gray-500'>
          Fashhub에서 나만의 스타일을 친구들과 공유하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className='mt-4'>
        <form>
          <div className='mb-4 flex flex-col gap-2'>
            <Input type='email' placeholder='이메일 주소' />
            <Input type='password' placeholder='비밀번호' />
          </div>
        </form>
        <p className='mt-6 text-center text-sm text-gray-600'>
          계정이 없으신가요?{' '}
          <Link
            href='/signup'
            className='font-medium text-[#0095f6] hover:underline'
          >
            회원가입
          </Link>
        </p>
      </CardContent>
      <CardFooter>
        <Button className='h-10 w-full px-6 py-3 text-white'>로그인</Button>
      </CardFooter>
      <button
        className='absolute right-3 top-3 text-gray-400 hover:text-gray-600'
        aria-label='Close'
      >
        ✕
      </button>
    </Card>
  );
};

export default LoginModal;
