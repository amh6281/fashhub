'use server';

import { signIn } from '@/auth';
import { baseUrl } from '@/config';
import { redirect } from 'next/navigation';

export const signUp = async (
  prevState: { message: string | null },
  formData: FormData,
) => {
  if (!formData.get('email')) return { message: 'no_email' };
  if (!formData.get('password')) return { message: 'no_password' };
  if (!formData.get('name')) return { message: 'no_name' };
  if (!formData.get('nickname')) return { message: 'no_nickname' };

  let shouldRedirect = false;
  try {
    const res = await fetch(`${baseUrl}/api/users}`, {
      method: 'post',
      body: formData,
      credentials: 'include', // 쿠키 전달 (계정 있는 경우 회원가입X) / 동일 출처, 교차 출처 요청 전송
    });
    console.log(res.status);
    if (res.status === 403) return { message: 'user_exists' };
    shouldRedirect = true;
    // 회원가입 + 로그인
    await signIn('credentials', {
      username: formData.get('id'),
      password: formData.get('password'),
      redirect: false,
    });
  } catch (err) {
    console.error(err);
    return { message: null };
  }
  if (shouldRedirect) redirect('/login');
  return { message: null };
};
