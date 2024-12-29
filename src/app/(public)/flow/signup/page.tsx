import { SignUpModal } from '@/components/Auth';

const SignUp = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <SignUpModal />
    </div>
  );
};

export default SignUp;
