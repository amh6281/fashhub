import { LoginModal } from '@/components/Auth';

const Login = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <LoginModal />
    </div>
  );
};

export default Login;
