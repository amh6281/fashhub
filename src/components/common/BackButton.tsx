'use client';

import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={router.back} className='font-semibold'>
      <ArrowLeft size={24} className='text-gray-600 hover:text-black' />
    </button>
  );
};

export default BackButton;
