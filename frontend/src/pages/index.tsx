import { Inter } from 'next/font/google'
import Header from '@/shared/layouts/Header';
import ChatForm from '@/modules/chat-gpt/containers/ChatForm';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 mt-16">
        <div className="mx-auto flex max-w-3xl items-center justify-between p-6 lg:px-8">
          <ChatForm />
        </div>
      </main>
    </div>
  )
}