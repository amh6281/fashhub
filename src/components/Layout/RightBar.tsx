import React from 'react';
import { Recommendations, SearchBar, TrendTags } from '../common';

const RightBar = () => {
  return (
    <div className='sticky top-0 flex h-max w-full flex-col gap-4 pt-4'>
      <SearchBar />
      <TrendTags />
      <Recommendations />
    </div>
  );
};

export default RightBar;
