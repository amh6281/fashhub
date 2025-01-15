import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// 서버 환경에서 실행 (Next는 서버에서 실행될 수 있기 때문에 - 서버사이드 렌더링 등)
