import React, { useState } from 'react';
import ChatBlock from '../components/ChatBlock';
import useEventSource from '../hooks/useEventSource';
import Icon from '@/shared/components/Icon';

const ChatForm = () => {
  const [newMessage, setNewMessage] = useState('');
  const [chatContent, setcChatContent] = useState('');
  const [chatItem, setChatItem] = useState<any>(null)

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      getAnswer();
    }
  };

  useEventSource('chat-gpt/stream', chatContent, (data: string) => {
    setChatItem((prevState: any) => ({...prevState, answer: prevState.answer + data}))
  });
  

  const getAnswer = () => {
    setChatItem({question: newMessage, answer: ''});
    setcChatContent(newMessage);
    setNewMessage('');
  }

  return (
    <div className='w-full  m-auto pb-8'>
       {chatItem && <ChatBlock {...chatItem} />}
      <div className="fixed left-0 right-0 w-full bottom-0 flex z-10 bg-gray-800">
        <div className='mx-auto w-full max-w-3xl py-4 h-18 px-3'>
          <div className='bg-gray-900 bg-opacity-50 flex h-12 rounded-md px-3'>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyUp={handleKeyPress}
              className="flex-grow bg-gray-900 bg-opacity-0 pr-3 focus:outline-none w-full"
              placeholder="Type your message..."
            /><button disabled={newMessage === ''} onClick={getAnswer}>
              <Icon name='send' />
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ChatForm;