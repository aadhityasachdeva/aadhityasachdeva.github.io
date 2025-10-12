import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotButton = () => {
  return (
    <Button
      size="icon"
      className="fixed bottom-6 left-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      onClick={() => {
        // Chatbot functionality to be added
        console.log('Chatbot clicked');
      }}
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ChatbotButton;
