import { BackButton } from '@/components/common';
import { Room } from '@/components/Messages';

const Messages = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* profile title */}
      <div className='sticky top-0 z-10 flex items-center gap-4 border-b-[1px] border-gray-300 p-4 backdrop-blur-md'>
        <BackButton />
        <h1 className='text-lg font-bold text-gray-900'>메세지</h1>
      </div>
      <Room />
      <Room />
    </div>
  );
};

export default Messages;
