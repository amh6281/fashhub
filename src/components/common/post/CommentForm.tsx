import { ImageSquare, UserCircle } from '@phosphor-icons/react/dist/ssr';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const CommentForm = () => {
  return (
    <form className='flex gap-4 border-b border-gray-300 p-4'>
      {/* avatar */}
      <div className='relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full'>
        <UserCircle size={36} className='text-gray-500' />
      </div>
      {/* form */}
      <div className='flex flex-1 flex-col gap-4'>
        <Textarea
          placeholder='답글 작성하기'
          className='resize-none border-none bg-transparent text-lg shadow-none outline-none placeholder:text-neutral-400'
        />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <input type='file' name='image' className='hidden' />
            <ImageSquare
              size={24}
              className='cursor-pointer text-cool-500 transition-colors hover:text-cool-600'
            />
          </div>
          <Button
            variant='secondary'
            className='h-10 rounded-full px-8 text-sm font-semibold'
          >
            답글
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
