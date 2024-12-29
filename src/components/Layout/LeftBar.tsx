import { menuList } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const LeftBar = () => {
  return (
    <div className='sticky top-0 flex h-screen flex-col justify-between pb-8 pt-2'>
      <div className='flex flex-col items-start gap-4 text-lg'>
        {/* logo */}
        <Link href='/' className='rounded-full px-4 py-2'>
          <Image src='/logo.png' alt='logo' width={24} height={24} />
        </Link>
        {/* menuList */}
        <div className='flex w-full flex-col gap-4'>
          {menuList.map((item) => (
            <Button
              variant='ghost'
              key={item.id}
              className='w-full rounded-full'
            >
              <Link
                href={item.link}
                className='flex w-full items-center gap-4 text-gray-700'
              >
                <Image
                  src={`icons/${item.icon}`}
                  alt={item.name}
                  width={24}
                  height={24}
                  className='object-contain'
                />
                <span className='text-[16px] font-medium'>{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>
        {/* post */}
        <Button variant='secondary' className='mt-5 h-10 w-full rounded-full'>
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
      </div>
      {/* user */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image src='/logo.png' alt='logo' width={100} height={100} />
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>mmmh_0803</span>
            <span className='text-sm text-gray-500'>@amh6281</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
