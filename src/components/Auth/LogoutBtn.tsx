'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LogoutBtn = () => {
  const router = useRouter();
  const { data } = useSession();

  const handleLogout = () => {
    // client 라우팅을 사용하기 위해서 redirect: false 옵션 추가
    signOut({ redirect: false }).then(() => router.replace('/'));
  };

  return (
    <div
      className='flex cursor-pointer items-center justify-between'
      onClick={handleLogout}
    >
      <div className='flex items-center gap-2'>
        <div className='relative h-10 w-10 overflow-hidden rounded-full'>
          <Image src='/logo.png' alt='logo' width={100} height={100} />
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>{data?.user?.email}</span>
          <span className='text-sm text-gray-500'>@{data?.user?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default LogoutBtn;
