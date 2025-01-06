import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const SearchFilter = () => {
  return (
    <div className='rounded-lg border-[1px] border-gray-300 p-4'>
      <h5 className='mb-4 text-lg font-bold'>검색 필터</h5>
      <RadioGroup defaultValue='option-one'>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='option-one' id='option-one' />
          <Label htmlFor='option-one'>모든 사용자</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='option-two' id='option-two' />
          <Label htmlFor='option-two'>내가 팔로우하는 사람들</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SearchFilter;
