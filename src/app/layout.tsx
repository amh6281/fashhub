import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { MSWProvider } from '@/mocks/MSWProvider';

// 서버 환경에서만 실행 (서버사이드 렌더링, 서버 컴포넌트)
if (process.env.NEXT_RUNTIME === 'nodejs') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { server } = require('@/mocks/server');
  server.listen();
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'FashHub',
  description:
    'Connect, share, and get real-time feedback on your style with FashHub.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <MSWProvider>{children}</MSWProvider>
      </body>
    </html>
  );
}
