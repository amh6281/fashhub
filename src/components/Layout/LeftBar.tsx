'use client';

import { menuList } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LogoutBtn } from '../Auth';
import { useSession } from 'next-auth/react';

const LeftBar = () => {
  const segment = useSelectedLayoutSegment();
  const { data: session } = useSession();

  return (
    <div className='sticky top-0 flex h-screen flex-col justify-between pb-8 pt-2'>
      <div className='flex flex-col items-start gap-4 text-lg'>
        {/* logo */}
        <Link
          href={session?.user ? '/home' : '/'}
          className='rounded-full px-4 py-2'
        >
          <Image src='/logo.png' alt='logo' width={24} height={24} />
        </Link>
        {/* menuList */}
        {session?.user && (
          <div className='flex w-full flex-col gap-4'>
            {menuList.map((item) => (
              <Button
                variant={segment === item.link ? 'secondary' : 'ghost'}
                key={item.id}
                className='w-full rounded-full'
              >
                <Link
                  href={`/${item.link}`}
                  className='flex w-full items-center gap-4 text-gray-700'
                >
                  <Image
                    src={`/icons/${item.icon}`}
                    alt={item.name}
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                  <span
                    className={cn(
                      'text-[16px] font-medium',
                      segment === item.link && 'font-bold',
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        )}
        {/* post */}
        {session?.user && (
          <Button variant='ghost' className='mt-5 h-10 w-full rounded-full'>
            <Link
              href='/compose/post'
              className='flex w-full items-center gap-4 text-gray-700'
            >
              <Image
                src='/icons/note-pencil.svg'
                alt='post'
                width={24}
                height={24}
                className='object-contain'
              />
              <span className='text-[16px] font-medium'>게시하기</span>
            </Link>
          </Button>
        )}
      </div>
      {/* logout button */}
      <LogoutBtn />
    </div>
  );
};

export default LeftBar;
