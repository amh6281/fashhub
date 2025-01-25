'use client';

import {
  UserCircle,
  DotsThreeCircle,
  MagnifyingGlass,
  EnvelopeSimple,
  MapPin,
  Calendar,
} from '@phosphor-icons/react';
import { Button } from '../ui/button';
import Image from 'next/image';
import BackButton from '../common/BackButton';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '@/types/User';
import { getUser } from '@/lib/api';

const UserInfo = ({ username }: { username: string }) => {
  const { data, error } = useQuery<
    UserType, // queryFn의 반환값
    Error, // queryFn 실패 시 에러 반환 타입
    UserType, // queryFn 성공 시 반환하는 데이터 타입
    [string, string] // 2) queryKey 타입
  >({
    queryKey: ['users', username],
    queryFn: getUser,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  if (error) {
    return (
      <div className='relative w-full'>
        {/* cover */}
        {/* TODO: Cover image가 없을경우에만 gradient */}
        <div
          className={cn(
            'relative flex aspect-[3/1] w-full items-center justify-center text-xl font-bold',
            // !coverImg && 'bg-gradient-to-r from-blue-500 to-purple-500',
          )}
        >
          계정이 존재하지 않습니다.
        </div>
      </div>
    );
  }
  return (
    <>
      <div className='sticky top-0 z-10 flex items-center gap-4 border-b-[1px] border-gray-300 p-4 backdrop-blur-md'>
        <BackButton />
        <h1 className='text-lg font-bold text-gray-900'>@{data?.username}</h1>
      </div>

      <div className='shadow-md'>
        {/* cover & avatar */}
        <div className='relative w-full'>
          {/* cover */}
          {/* TODO: Cover image가 없을경우에만 gradient */}
          <div
            className={cn(
              'relative aspect-[3/1] w-full bg-gradient-to-r from-blue-500 to-purple-500',
              // !coverImg && 'bg-gradient-to-r from-blue-500 to-purple-500',
            )}
          >
            <Image src='/logo.png' alt='Cover' fill />
          </div>
          {/* avatar */}
          <div className='absolute bottom-0 left-4 translate-y-1/2'>
            <div className='flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-lg'>
              <UserCircle size={80} className='text-gray-500' />
            </div>
          </div>
        </div>

        {/* actions */}
        <div className='flex justify-end gap-2 p-4'>
          <button className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100'>
            <DotsThreeCircle size={20} />
          </button>
          <button className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100'>
            <MagnifyingGlass size={20} />
          </button>
          <button className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100'>
            <EnvelopeSimple size={20} />
          </button>
          <Button
            variant='secondary'
            className='rounded-full px-6 py-2 font-bold hover:bg-gray-200'
          >
            팔로우
          </Button>
        </div>

        {/* user details */}
        <div className='p-4'>
          <div className='mb-2'>
            <h1 className='text-2xl font-bold text-gray-900'>
              {data?.fullname}
            </h1>
            <span className='text-sm text-gray-500'>@{data?.username}</span>
          </div>
          <p className='mb-4 font-semibold text-gray-700'>안뇽하세요잉</p>

          {/* info */}
          <div className='mb-4 flex flex-wrap gap-6 text-sm text-gray-500'>
            <div className='flex items-center gap-1'>
              <MapPin size={16} />
              <span>Korea</span>
            </div>
            <div className='flex items-center gap-1'>
              <Calendar size={16} />
              <span>2025년 1월 1일</span>
            </div>
          </div>

          {/* followers */}
          <div className='flex gap-6'>
            <div className='flex items-center gap-1'>
              <span className='text-lg font-bold text-gray-900'>100</span>
              <span className='text-sm text-gray-500'>팔로워</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-lg font-bold text-gray-900'>100</span>
              <span className='text-sm text-gray-500'>팔로잉</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
