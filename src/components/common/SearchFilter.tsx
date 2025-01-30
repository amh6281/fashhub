'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'follow') {
      params.set('pf', 'on');
    } else {
      params.delete('pf');
    }
    router.replace(`/search?${params.toString()}`);
  };

  return (
    <div className='rounded-lg border-[1px] border-gray-300 p-4'>
      <h5 className='mb-4 text-lg font-bold'>검색 필터</h5>
      <RadioGroup defaultValue='option-one' onValueChange={handleChange}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='all' id='all' />
          <Label htmlFor='all'>모든 사용자</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='follow' id='follow' />
          <Label htmlFor='follow'>내가 팔로우하는 사람들</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SearchFilter;
