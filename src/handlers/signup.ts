'use server';

import { baseUrl } from '@/config';
import { redirect } from 'next/navigation';

export const signUp = async (
  prevState: { message: string | null },
  formData: FormData,
) => {
  if (!formData.get('id')) return { message: 'no_id' };
  if (!formData.get('nickname')) return { message: 'no_nickname' };
  if (!formData.get('password')) return { message: 'no_password' };
  if (!formData.get('image')) return { message: 'no_image' };

  let shouldRedirect = false;
  try {
    const res = await fetch(`${baseUrl}/api/users`, {
      method: 'post',
      body: formData,
      credentials: 'include', // 쿠키 전달 (계정 있는 경우 회원가입X) / 동일 출처, 교차 출처 요청 전송
    });
    if (res.status === 403) return { message: 'user_exists' };
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return { message: null };
  }
  if (shouldRedirect) redirect('/flow/login');
  return { message: null };
};
