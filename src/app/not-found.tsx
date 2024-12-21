import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FashHub - Page Not Found',
  robots: 'noindex',
};

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50 text-center relative'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-10'
        style={{ backgroundImage: "url('/images/background-pattern.png')" }}
      ></div>
      <h1 className='text-5xl font-extrabold text-gray-800 mb-6'>
        Oops! Style Not Found.
      </h1>
      <p className='text-gray-500 mb-8 text-lg'>
        찾으시는 페이지를 찾을 수 없습니다. <br /> 최신 트렌드와 스타일을
        확인하려면 메인으로 돌아가세요!
      </p>
      <Link
        href='/'
        className='flex items-center justify-center rounded-full bg-black text-white h-12 px-8 shadow-lg hover:bg-gray-800 transition-colors'
      >
        <span>메인 페이지로 돌아가기</span>
      </Link>
    </div>
  );
};

export default NotFound;
