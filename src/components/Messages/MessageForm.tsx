'use client';

import { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // socket.io
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center gap-2 border-t border-gray-300 p-4'
    >
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='메시지를 입력하세요...'
        className='flex-1 rounded-md border border-gray-300 p-2'
      />
      <button
        type='submit'
        className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
      >
        전송
      </button>
    </form>
  );
};

export default MessageForm;
