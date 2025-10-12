import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ChatbotDialog from './ChatbotDialog';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 left-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6" />
      </Button>
      <ChatbotDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatbotButton;
