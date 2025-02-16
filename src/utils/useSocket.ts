import { useSession } from 'next-auth/react';
import { useCallback, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket | null;

export const useSocket = (): [Socket | null, () => void] => {
  const { data: session } = useSession();

  // 소켓 연결 해제
  const disconnect = useCallback(() => {
    socket?.disconnect();
    socket = null;
  }, []);

  // 소켓 연결
  useEffect(() => {
    if (!socket) {
      socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}/messages`, {
        transports: ['websocket'], // 구형 브라우저에서도 동작하도록 설정 (http polling)
      });

      socket.on('connect_error', (err) => {
        console.error(err);
        console.log('connect_error');
      });
    }
  }, [session]);

  // 로그인 시 소켓 연결 후 id를 전송해 로그인한 상태를 서버에 알림 (소켓 로그인)
  useEffect(() => {
    if (socket?.connect && session?.user?.email) {
      socket?.emit('login', { id: session?.user?.email });
    }
  }, [session]);

  return [socket, disconnect];
};

// state로 socket 관리 시 useSocket 여러 컴포넌트에서 사용하면 여러번 연결됨.
// 따라서 socket을 전역으로 관리하여 중복 연결을 방지
