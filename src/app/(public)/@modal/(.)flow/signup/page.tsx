import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AuthModal = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <Card className='relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
        <CardHeader>
          <CardTitle className='text-center text-xl font-bold'>
            회원가입 및 로그인
          </CardTitle>
          <CardDescription className='text-center text-sm text-gray-500'>
            회원가입 또는 로그인하세요
          </CardDescription>
        </CardHeader>
        <CardContent className='mt-4'>
          <p className='text-center text-gray-700'>
            회원가입 및 로그인 관련 내용
          </p>
        </CardContent>
        <CardFooter className='mt-6 text-center'>
          <p className='text-sm text-gray-500'>추가 정보</p>
        </CardFooter>
        <button
          className='absolute right-3 top-3 text-gray-400 hover:text-gray-600'
          aria-label='Close'
        >
          ✕
        </button>
      </Card>
    </div>
  );
};

export default AuthModal;
