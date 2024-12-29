import { SignUpModal } from '@/components/Auth';

const InterceptingSignup = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <SignUpModal />
    </div>
  );
};

export default InterceptingSignup;
