import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WebGLBackground } from '@/components/WebGLBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Oleg's AI assistant. I can help you learn more about his work, skills, and experience. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // AI responses based on context
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! It's great to meet you. I'm here to tell you about Oleg Zeng, an AI and Full-stack developer. He specializes in creating end-to-end applications with AI integration, WebGL experiences, and blockchain solutions. What specific area would you like to explore?";
    }
    
    if (lowerMessage.includes('skills') || lowerMessage.includes('tech') || lowerMessage.includes('stack')) {
      return "Oleg has expertise across multiple domains:\n\n🔥 Frontend: React, Next.js, TypeScript, Three.js\n⚡ Backend: Node.js, Nest.js, Python, Rust\n🤖 AI/ML: LLM integration, data pipelines\n🌐 WebGL: babylon.js, Three.js for 3D experiences\n⛓️ Blockchain: Solana, Web3.js development\n💾 Databases: MongoDB, PostgreSQL, Supabase\n\nWhich area interests you most?";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('projects')) {
      return "Oleg has worked on diverse projects:\n\n🎨 Frontend: Companies like Neiman Marcus, Time Out, BabyCenter\n🎮 WebGL: Interactive 3D ecommerce sites, immersive experiences\n🤖 AI: StoryFile, ChatDoc, LLM platforms\n💎 Blockchain: Major exchanges like Bilaxy, Coinsbit, Hotbit\n\nHe combines technical excellence with creative vision. Would you like details about any specific project type?";
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      return "Oleg specializes in AI integration! He builds intelligent features into full-stack applications:\n\n🧠 LLM integration and fine-tuning\n📊 Data pipeline development\n🔄 Real-time AI model deployment\n💬 Conversational AI systems\n📈 ML model optimization\n\nHe's worked on platforms like StoryFile and ChatDoc, creating seamless AI experiences. Want to know more about his AI approach?";
    }
    
    if (lowerMessage.includes('webgl') || lowerMessage.includes('3d')) {
      return "Oleg creates stunning 3D web experiences! His WebGL work includes:\n\n📱 3D iPhone ecommerce showcase\n👟 Interactive sneaker configurators\n🥃 Immersive whisky shopping experiences\n🌍 3D geographical visualizations\n\nUsing Three.js and babylon.js, he builds performant, interactive 3D applications that run smoothly in browsers. These aren't just demos - they're production-ready commercial applications!";
    }
    
    if (lowerMessage.includes('blockchain') || lowerMessage.includes('web3')) {
      return "Oleg has extensive blockchain experience:\n\n🏦 Built trading platforms for major exchanges\n⚡ Solana blockchain development\n🔗 Web3.js integration\n💰 DeFi protocol development\n🔐 Smart contract interaction\n\nHe's worked with exchanges handling millions in daily volume, ensuring security, performance, and user experience. His blockchain work combines technical depth with practical business applications.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('available')) {
      return "Oleg is available for exciting projects! You can reach him:\n\n📧 Email: m80684825@gmail.com\n💼 Check out the Contact page for more details\n\nHe's particularly interested in:\n• Full-stack applications with AI integration\n• Complex 3D web experiences\n• Blockchain and Web3 projects\n• Innovative tech challenges\n\nReady to build something amazing together?";
    }
    
    if (lowerMessage.includes('about') || lowerMessage.includes('who')) {
      return "Oleg Zeng is an AI | Full-stack developer who bridges multiple worlds:\n\n🎯 He combines traditional full-stack skills with cutting-edge AI\n🎨 Creates immersive 3D web experiences\n⛓️ Builds robust blockchain applications\n🚀 Delivers end-to-end solutions\n\nWhat makes him unique is the ability to integrate AI intelligence into beautiful, functional applications. Whether it's a 3D ecommerce site with AI recommendations or a blockchain platform with smart analytics, he brings ideas to life!";
    }
    
    return "That's an interesting question! I can tell you about Oleg's skills in AI/ML, full-stack development, WebGL/3D experiences, blockchain development, or his project portfolio. I can also help you get in touch with him for potential collaborations. What would you like to explore?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <WebGLBackground />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-glow mb-4">AI Assistant</h1>
            <p className="text-xl text-muted-foreground">
              Ask me anything about Oleg's skills, experience, and projects
            </p>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="card-glass border border-primary/20 h-[600px] flex flex-col">
              {/* Messages */}
              <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-primary' : 'bg-card-hover'}`}>
                          {message.sender === 'user' ? (
                            <User className="w-4 h-4 text-primary-foreground" />
                          ) : (
                            <Bot className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div className={`p-4 rounded-2xl ${
                          message.sender === 'user' 
                            ? 'bg-gradient-primary text-primary-foreground' 
                            : 'bg-card-hover border border-primary/20'
                        }`}>
                          <div className="whitespace-pre-line text-sm leading-relaxed">
                            {message.content}
                          </div>
                          <div className={`text-xs mt-2 opacity-70 ${
                            message.sender === 'user' ? 'text-primary-foreground' : 'text-muted-foreground'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-3 max-w-[80%]">
                        <div className="p-2 rounded-full bg-card-hover">
                          <Bot className="w-4 h-4 text-primary" />
                        </div>
                        <div className="p-4 rounded-2xl bg-card-hover border border-primary/20">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-6 border-t border-primary/20">
                <div className="flex gap-4">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Oleg's skills, projects, or experience..."
                    className="flex-1 bg-card-glass border-primary/20 focus:border-primary"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Chat;