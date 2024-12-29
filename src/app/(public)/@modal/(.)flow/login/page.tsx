import { LoginModal } from '@/components/Auth';

const InterceptingLogin = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <LoginModal />
    </div>
  );
};

export default InterceptingLogin;
