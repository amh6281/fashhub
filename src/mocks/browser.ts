import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

const worker = setupWorker(...handlers);

export default worker;

// 브라우저 환경에서 실행 (Next는 클라이언트에서 실행될 수 있기 때문에)
