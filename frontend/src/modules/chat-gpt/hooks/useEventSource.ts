import { useEffect } from 'react';

const useEventSource = (url: string, content: string, onMessage: Function) => {
  useEffect(() => {
    if(content)  {
        const eventSource = new EventSource(`${process.env.NEXT_PUBLIC_API_URL}/${url}?content=${content}`);

        eventSource.onmessage = (event) => {
          const { data } = event;
          onMessage(data);
        };
    
        eventSource.onerror = (error) => {
          eventSource.close();
        };
    
        return () => {
          eventSource.close();
        };
    };
  }, [content]);
};

export default useEventSource;