export const showMessage = (message: string | null) => {
  if (message === 'no_email') return '이메일을 입력하세요.';
  if (message === 'no_password') return '비밀번호를 입력하세요.';
  if (message === 'no_fullname') return '성명을 입력하세요.';
  if (message === 'no_username') return '사용자 이름을 입력하세요.';
  return '';
};
