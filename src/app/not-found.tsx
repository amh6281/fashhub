import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FashHub - Page Not Found',
  robots: 'noindex',
};

const NotFound = () => {
  return (
    <div className='relative flex h-screen flex-col items-center justify-center bg-gray-50 text-center'>
      <h1 className='mb-6 text-5xl font-extrabold text-gray-800'>
        Oops! Style Not Found.
      </h1>
      <p className='mb-8 text-lg text-gray-500'>
        찾으시는 페이지를 찾을 수 없습니다. <br /> 최신 트렌드와 스타일을
        확인하려면 메인으로 돌아가세요!
      </p>
      <Link
        href='/'
        className='flex h-12 items-center justify-center rounded-full bg-black px-8 text-white shadow-lg transition-colors hover:bg-gray-800'
      >
        <span>메인 페이지로 돌아가기</span>
      </Link>
    </div>
  );
};

export default NotFound;
