import { ImageSquare, UserCircle } from '@phosphor-icons/react/dist/ssr';
import { Button } from '../ui/button';

const PostForm = () => {
  return (
    <form className='flex gap-4 border-b border-gray-300 p-4'>
      {/* avatar */}
      <div className='relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full'>
        <UserCircle size={36} className='text-gray-500' />
      </div>
      {/* form */}
      <div className='flex flex-1 flex-col gap-4'>
        <input
          type='text'
          placeholder='무슨 일이 일어나고 있나요?'
          className='bg-transparent text-lg outline-none placeholder:text-neutral-400'
        />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <input
              type='file'
              name='file'
              className='hidden'
              id='file'
              accept='image/*,video/*'
            />
            <label htmlFor='file' className='cursor-pointer'>
              <ImageSquare
                size={24}
                className='text-neutral-400 transition-colors hover:text-neutral-600'
              />
            </label>
          </div>
          <Button
            variant='secondary'
            className='h-10 rounded-full text-sm font-semibold'
          >
            게시하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
