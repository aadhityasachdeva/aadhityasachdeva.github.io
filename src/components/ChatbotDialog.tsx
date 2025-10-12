import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  type: 'bot' | 'user';
  text: string;
  options?: string[];
}

interface ChatbotDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotDialog = ({ isOpen, onClose }: ChatbotDialogProps) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: "Hey there! 👋 I'm Remi, your friendly assistant from Askit India.\nWould you like to know how Askit works or need help getting started?",
      options: ['What is Askit?', 'How does it work?', 'Join the beta version', 'Talk to the team']
    }
  ]);
  const [conversationState, setConversationState] = useState<string>('greeting');

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: option }]);

    // Handle different options
    setTimeout(() => {
      if (option === 'What is Askit?') {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Askit is a student-powered service marketplace, a place where students can earn through their skills and others can get tasks done affordably.\n\nWould you like to see what kind of services people are offering on Askit?",
          options: ['Yes, show me categories', 'Not right now']
        }]);
        setConversationState('what-is-askit');
      } else if (option === 'How does it work?') {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Super simple! Here's how Askit works:\n1️⃣ Create your profile\n2️⃣ Post a task or browse existing ones\n3️⃣ Get connected with verified students\n4️⃣ Task done, everyone wins 🎉\n\nWould you like to try it out now or see a quick tutorial video?",
          options: ['Try it now', 'Show me tutorial', 'Go back']
        }]);
        setConversationState('how-it-works');
      } else if (option === 'Join the beta version') {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "That's awesome! 🌟\nWe're inviting early users to join the Askit Beta Tribe — get early access and priority task matching.\n\nTo join, just press on Get Beta Access 👇",
          options: ['App Access']
        }]);
        setConversationState('join-beta');
      } else if (option === 'Talk to the team') {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Sure! You can reach our team anytime at 📧 askit.socials@gmail.com\n\nWould you like me to open your email app?",
          options: ['Yes, open email', 'Go back']
        }]);
        setConversationState('talk-to-team');
      } else if (option === 'Yes, show me categories') {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Here are a few examples of what people are posting on Askit:\n\n🎨 Graphic Design\n📝 Assignments & Research\n🎬 Video Editing\n📷 Photography\n💡 Tech Help\n🏋️‍♂️ Fitness & Training\n…and many more tailored to your college needs!\n\nWould you like to post a task or join as a service provider?",
          options: ['Post a task', 'Join as Service Provider']
        }]);
        setConversationState('categories');
      } else if (option === 'Not right now') {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "No problem! Feel free to explore our website or reach out anytime you need help.\n\nThanks for chatting with me 😊\nWhether you want to earn or get things done, remember:\n👉 It's easy, it's fast… it's Askit.",
          options: []
        }]);
        setConversationState('closing');
      } else if (option === 'Try it now') {
        navigate('/beta-access');
        onClose();
      } else if (option === 'Show me tutorial') {
        window.open('https://drive.google.com/drive/folders/18Z4DeMNXa7RLoGUhgYu17KgX4U3bDMqk?usp=drive_link', '_blank');
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Opening tutorial in a new tab! 📎\n\nIs there anything else I can help you with?",
          options: ['Go back']
        }]);
      } else if (option === 'App Access') {
        navigate('/beta-access');
        onClose();
      } else if (option === 'Yes, open email') {
        window.location.href = 'mailto:askit.socials@gmail.com';
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Opening your email app! ✉️\n\nIs there anything else I can help you with?",
          options: ['Go back']
        }]);
      } else if (option === 'Go back') {
        setMessages([{
          type: 'bot',
          text: "Hey there! 👋 I'm Remi, your friendly assistant from Askit India.\nWould you like to know how Askit works or need help getting started?",
          options: ['What is Askit?', 'How does it work?', 'Join the beta version', 'Talk to the team']
        }]);
        setConversationState('greeting');
      } else if (option === 'Post a task' || option === 'Join as Service Provider') {
        navigate('/beta-access');
        onClose();
      }
    }, 500);
  };

  const handleFAQ = (question: string) => {
    setMessages(prev => [...prev, { type: 'user', text: question }]);
    
    setTimeout(() => {
      let answer = '';
      if (question.toLowerCase().includes('who can use')) {
        answer = "Anyone in college — whether you want to earn or get tasks done!";
      } else if (question.toLowerCase().includes('free')) {
        answer = "Yes! The MVP version is completely free. No hidden fees.";
      } else if (question.toLowerCase().includes('payment')) {
        answer = "Users handle payments directly via UPI. There's no in-app payment yet to keep things transparent and simple.";
      } else if (question.toLowerCase().includes('tasks')) {
        answer = "Anything from academic help to design work, video editing, research, or even small college projects.";
      } else if (question.toLowerCase().includes('launch')) {
        answer = "We're currently in testing and improving fast, the full version will roll out soon!";
      }

      if (answer) {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: answer + "\n\nIs there anything else I can help you with?",
          options: ['What is Askit?', 'How does it work?', 'Join the beta version', 'Talk to the team']
        }]);
      }
    }, 500);
  };

  const commonFAQs = [
    "Who can use Askit?",
    "Is it free to use?",
    "How do payments work?",
    "What kind of tasks can I post?",
    "When will the full version launch?"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg h-[600px] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Remi - Your Askit Assistant
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-1 px-6 py-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground ml-auto' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  <p className="whitespace-pre-line text-sm">{message.text}</p>
                  {message.options && message.options.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, optIndex) => (
                        <Button
                          key={optIndex}
                          variant="outline"
                          size="sm"
                          className="w-full justify-start text-left"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t px-6 py-4">
          <p className="text-xs text-muted-foreground mb-2">Quick FAQs:</p>
          <div className="flex flex-wrap gap-2">
            {commonFAQs.map((faq, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-xs h-7"
                onClick={() => handleFAQ(faq)}
              >
                {faq}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotDialog;
