import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, CircleDashed } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import PageMeta from '../components/PageMeta';
import { getAIResponseStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TypingIndicator = () => (
    <div className="flex items-center gap-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
    </div>
);

const PremiumSupport: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, endPremiumSession } = useAuth();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  const handleEndSession = () => {
      // For subscribers, this is just a redirect. For one-time users, it will end the session.
      navigate('/session-resolved');
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    
    setMessages(prev => [...prev, { role: 'model', content: '' }]);

    await getAIResponseStream(newMessages, (chunk) => {
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage && lastMessage.role === 'model') {
          return [...prev.slice(0, -1), { ...lastMessage, content: lastMessage.content + chunk }];
        }
        return prev;
      });
    }, 'premium');

    setIsLoading(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <PageMeta 
        title="Support Premium - Didacid"
        description="Accédez à l'IA experte pour une résolution guidée pas-à-pas de votre problème informatique."
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-16 h-16 text-primary mx-auto mb-4 p-3 bg-surface rounded-full" />
          <h1 className="text-4xl font-extrabold text-text-primary">Support Premium</h1>
          <p className="mt-4 text-lg text-text-secondary">
            Bienvenue, {user?.name}. L'IA experte va vous guider étape par étape.
          </p>
        </div>
        
        <div className="bg-surface rounded-lg shadow-lg flex flex-col h-[70vh]">
          <div className="flex-grow p-4 sm:p-6 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="bg-gray-700 rounded-lg p-3 max-w-[80%]">
                  <p className="text-text-primary">Bonjour et bienvenue sur le support premium. Je suis prêt à vous guider pour résoudre votre problème. Décrivez-le moi en détail.</p>
                </div>
              </div>
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'model' && (
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div className={`rounded-lg p-3 max-w-[80%] ${message.role === 'user' ? 'bg-primary text-white' : 'bg-gray-700 text-text-primary'}`}>
                     <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                  {message.role === 'user' && (
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
              ))}
               {isLoading && (
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 max-w-[80%] flex items-center gap-2">
                        <TypingIndicator />
                    </div>
                  </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="p-4 sm:p-6 border-t border-gray-700">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tapez votre message ici..."
                className="w-full bg-gray-800 border-gray-600 rounded-lg py-3 pl-4 pr-20 resize-none focus:ring-primary focus:border-primary"
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary text-white disabled:bg-gray-600 hover:bg-opacity-80 transition-all"
                aria-label="Envoyer le message"
              >
                {isLoading ? <CircleDashed className="animate-spin" /> : <Send />}
              </button>
            </div>
             {!user?.isSubscribed && (
                <div className="text-center mt-4">
                    <button onClick={handleEndSession} className="text-sm text-primary hover:underline">
                        Mon problème est résolu, terminer la session &rarr;
                    </button>
                </div>
             )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumSupport;
