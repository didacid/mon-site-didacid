import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, CornerDownLeft, CircleDashed, RotateCcw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import PageMeta from '../components/PageMeta';
import { getAIResponseStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Link } from 'react-router-dom';

const TypingIndicator = () => (
    <div className="flex items-center gap-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
    </div>
);

const AISupport: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(Date.now()); // To allow resetting the session
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const userMessagesCount = messages.filter(m => m.role === 'user').length;
  const freeMessageLimit = 3;
  const isLimitReached = userMessagesCount >= freeMessageLimit;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  const startNewSession = () => {
      setMessages([]);
      setSessionId(Date.now());
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading || isLimitReached) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    
    // Add a placeholder for the model's response
    setMessages(prev => [...prev, { role: 'model', content: '' }]);

    await getAIResponseStream(newMessages, (chunk) => {
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage && lastMessage.role === 'model') {
          return [...prev.slice(0, -1), { ...lastMessage, content: lastMessage.content + chunk }];
        }
        return prev;
      });
    }, 'free');

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
        title="Support IA Gratuit - Didacid"
        description="Obtenez un diagnostic informatique gratuit et instantané avec mon assistant IA. Décrivez votre problème et laissez-vous guider."
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-16 h-16 text-primary mx-auto mb-4 p-3 bg-surface rounded-full" />
          <h1 className="text-4xl font-extrabold text-text-primary">Support IA Gratuit</h1>
          <p className="mt-4 text-lg text-text-secondary">
            Décrivez votre problème. L'IA vous posera quelques questions pour établir un diagnostic. Vous avez droit à {freeMessageLimit} messages.
          </p>
        </div>
        
        <div className="bg-surface rounded-lg shadow-lg flex flex-col h-[70vh]">
          <div className="flex-grow p-4 sm:p-6 overflow-y-auto">
            <div className="space-y-6" key={sessionId}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="bg-gray-700 rounded-lg p-3 max-w-[80%]">
                  <p className="text-text-primary">Bonjour ! Je suis l'assistant IA de Didacid. Comment puis-je vous aider aujourd'hui ?</p>
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
               {isLimitReached && !isLoading && (
                 <div className="text-center p-4 my-4 bg-yellow-900/50 text-yellow-300 rounded-lg">
                    <h3 className="font-bold">Limite de messages gratuits atteinte !</h3>
                    <p className="text-sm mt-2">
                        Pour une résolution complète, passez au support premium.
                    </p>
                     <div className="flex justify-center gap-4 mt-4">
                        <Link to="/pricing" className="bg-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-opacity-80 transition-all text-sm">
                            Voir les offres
                        </Link>
                         <button onClick={startNewSession} className="flex items-center gap-2 bg-gray-700 text-text-primary font-semibold py-2 px-4 rounded-full hover:bg-gray-600 transition-all text-sm">
                            <RotateCcw size={14} /> Nouvelle Session
                        </button>
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
                placeholder={isLimitReached ? "Limite de messages atteinte." : "Tapez votre message ici..."}
                className="w-full bg-gray-800 border-gray-600 rounded-lg py-3 pl-4 pr-20 resize-none focus:ring-primary focus:border-primary disabled:opacity-50"
                rows={1}
                disabled={isLoading || isLimitReached}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim() || isLimitReached}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary text-white disabled:bg-gray-600 hover:bg-opacity-80 transition-all"
                aria-label="Envoyer le message"
              >
                {isLoading ? <CircleDashed className="animate-spin" /> : <Send />}
              </button>
               <p className="text-xs text-text-secondary mt-2 text-right">
                {userMessagesCount} / {freeMessageLimit} messages. <kbd className="p-1 bg-gray-600 rounded">Entrée</kbd> pour envoyer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISupport;
