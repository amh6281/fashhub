'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { signUp } from '@/handlers/signup';
import { showMessage } from '@/utils/handleError';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const SignUpModal = () => {
  const router = useRouter();
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(signUp, { message: null });

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
        <form action={formAction}>
          <div className='mb-4 flex flex-col gap-2'>
            <Input type='email' placeholder='이메일 주소' name='email' />
            <Input type='password' placeholder='비밀번호' name='password' />
            <Input type='text' placeholder='성명' name='fullname' />
            <Input type='text' placeholder='사용자 이름' name='username' />
          </div>
          <Button
            type='submit'
            className='h-10 w-full px-6 py-3 text-white'
            disabled={pending}
          >
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
        <p className='mt-4 text-center text-sm text-red-600'>
          {showMessage(state?.message)}
        </p>
      </CardContent>
      <button
        className='absolute right-3 top-3 text-gray-400 hover:text-gray-600'
        aria-label='Close'
        onClick={() => router.back()}
      >
        ✕
      </button>
    </Card>
  );
};

export default SignUpModal;
