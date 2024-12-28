import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MainPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50'>
      {/* 로고 */}
      <div className='mb-8'>
        <Image
          src='/logo.png'
          alt='Fashhub Logo'
          width={200}
          height={200}
          className='object-contain'
        />
      </div>

      {/* Fashhub 소개 텍스트 */}
      <div className='mb-10 text-center'>
        <h1 className='mb-4 text-4xl font-bold text-gray-800'>
          Welcome to Fashhub
        </h1>
        <p className='text-lg text-gray-600'>
          나만의 스타일을 공유하고, 새로운 트렌드를 발견하세요.
          <br />
          지금 가입하여 패션 커뮤니티에 함께하세요!
        </p>
      </div>

      {/* 회원가입 및 로그인 버튼 */}
      <div className='flex space-x-4'>
        <Button className='h-12 w-[100px] px-6 py-3 text-white'>
          <Link href='/flow/signup'>회원가입</Link>
        </Button>
        <Button
          variant='outline'
          className='h-12 w-[100px] px-6 py-3 text-[#241e1f]'
        >
          <Link href='/login'>로그인</Link>
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
