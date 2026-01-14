'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface AIWorkflowDemoProps {
  className?: string;
}

interface QAItem {
  question: string;
  aiResponse: string;
  suggestedQuestions: string[];
}

const qaData: QAItem[] = [
  {
    question: 'Why is human feedback necessary for accurate LLM responses?',
    aiResponse: 'Human feedback is crucial because LLMs are not always truthful or aligned with human preferences. Human feedback helps fine-tune models to be more accurate and aligned with real-world needs.',
    suggestedQuestions: [
      'How does reinforcement learning from human feedback work?',
      'What are the best practices for collecting human feedback?',
      'Can automated systems replace human feedback entirely?',
    ],
  },
  {
    question: 'How does reinforcement learning improve AI models?',
    aiResponse: 'Reinforcement Learning from Human Feedback (RLHF) improves AI models by fine-tuning them based on human preferences. This process helps reduce harmful outputs, improve alignment with human values, and create more reliable AI systems.',
    suggestedQuestions: [
      'What is the difference between supervised learning and RLHF?',
      'How long does it take to train a model with RLHF?',
      'What are the computational costs of RLHF?',
    ],
  },
  {
    question: 'What makes AI responses more reliable?',
    aiResponse: 'AI responses become more reliable through continuous feedback loops from domain experts, multi-layered validation processes, and a combination of automated testing with human review.',
    suggestedQuestions: [
      'How do you measure AI response reliability?',
      'What role does data quality play in reliability?',
      'Can reliability be maintained at scale?',
    ],
  },
];

const ChatBubble = ({ 
  message, 
  isUser = false,
  isAI = false,
  showProfilePic = false 
}: { 
  message: string; 
  isUser?: boolean;
  isAI?: boolean;
  showProfilePic?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: isUser ? -20 : 20, y: 10 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    exit={{ opacity: 0, x: isUser ? -20 : 20, y: -10 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={`flex items-start gap-3 ${isUser ? 'flex-row' : isAI ? 'flex-row-reverse' : 'flex-col'} ${isAI ? 'justify-end' : ''}`}
  >
    {(isUser || isAI) && showProfilePic && (
      <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 flex items-center justify-center">
        {isAI ? (
          <img 
            src="/illustrations/ai_logo_fluvosoft.jpg" 
            alt="AI" 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src="/illustrations/human_logo_fluvosoft.jpg" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
    )}
    <div
      className={`rounded-2xl px-4 py-3 backdrop-blur-md border ${
        isUser
          ? 'bg-gray-700/30 border-gray-600/30 text-white max-w-md ml-auto'
          : isAI
          ? 'bg-gray-800/30 border-gray-600/30 text-white max-w-2xl'
          : 'bg-gray-800/30 border-gray-600/30 text-white w-full'
      }`}
    >
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  </motion.div>
);

const SuggestedQuestionCard = ({ 
  text, 
  index 
}: { 
  text: string; 
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 + 0.7, duration: 0.6, ease: 'easeOut' }}
    className="bg-gray-700/30 backdrop-blur-md border border-gray-600/30 rounded-lg px-4 py-2.5 hover:border-brand-orange/50 hover:bg-gray-700/40 transition-all cursor-pointer group"
    whileHover={{ scale: 1.02, y: -2 }}
  >
    <p className="text-xs text-gray-300 leading-relaxed group-hover:text-white transition-colors">{text}</p>
  </motion.div>
);

const ChatAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAIResponse, setShowAIResponse] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Start first cycle
    const startCycle = () => {
      setShowAIResponse(false);
      setShowSuggestions(false);
      setIsTyping(true);

      // Show typing indicator, then AI response
      setTimeout(() => {
        setIsTyping(false);
        setShowAIResponse(true);
      }, 2000); // Typing delay

      // Show suggestions after AI response
      setTimeout(() => {
        setShowSuggestions(true);
      }, 5000);

      // Move to next question after showing everything
      setTimeout(() => {
        setShowAIResponse(false);
        setShowSuggestions(false);
        setCurrentIndex((prev) => (prev + 1) % qaData.length);
      }, 12000);
    };

    // Initial delay
    const initialTimeout = setTimeout(() => {
      startCycle();
    }, 1500);

    // Cycle interval
    const cycleInterval = setInterval(() => {
      startCycle();
    }, 12500); // Total cycle time

    return () => {
      clearInterval(cycleInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const currentQA = qaData[currentIndex];

  return (
    <div className="bg-black rounded-2xl p-6 shadow-2xl border border-gray-800">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <h3 className="text-sm font-medium text-gray-300">AI Text Generator</h3>
        <div className="w-12"></div>
      </div>

      {/* Chat Content */}
      <div className="space-y-4 min-h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`qa-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* User Question */}
            <div className="flex justify-start">
              <ChatBubble 
                message={currentQA.question} 
                isUser={true} 
                showProfilePic={true} 
              />
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-start gap-3 justify-end"
              >
                <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 flex items-center justify-center">
                  <img 
                    src="/illustrations/ai_logo_fluvosoft.jpg" 
                    alt="AI" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-800/30 backdrop-blur-md border border-gray-600/30 rounded-2xl px-4 py-3">
                  <div className="flex gap-1.5">
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* AI Response */}
            {showAIResponse && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex justify-end"
              >
                <ChatBubble 
                  message={currentQA.aiResponse} 
                  isAI={true} 
                  showProfilePic={true} 
                />
              </motion.div>
            )}

            {/* Suggested Questions */}
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-2 pt-2 flex flex-col items-center"
              >
                <p className="text-xs text-gray-400 font-medium mb-2 px-2">Suggested questions:</p>
                <div className="space-y-2 max-w-md w-full">
                  {currentQA.suggestedQuestions.map((question, idx) => (
                    <SuggestedQuestionCard key={idx} text={question} index={idx} />
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function AIWorkflowDemo({ className = '' }: AIWorkflowDemoProps) {
  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Titles */}
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-md md:text-md uppercase lg:text-md font-bold text-gray-900 font-inter mb-6">
                Build AI
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
                Powering Frontier AI
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                <span className="inline-block bg-gradient-to-r from-brand-orange via-brand-orange-light via-brand-orange to-brand-orange-dark bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Next Generation</span> AI powered by world-class data.
              </p>
            </AnimatedSection>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-[5fr_3fr] gap-12 items-center">
            {/* Left Side - Chat Animation */}
            <AnimatedSection delay={0.6} direction="right">
              <ChatAnimation />
            </AnimatedSection>

            {/* Right Side - Content */}
            <AnimatedSection delay={0.8} direction="left">
              <div className="space-y-6">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Generative AI
                </h4>
                <h5 className="text-xl md:text-2xl font-medium text-gray-700">
                  Powering the next generation of Generative AI
                </h5>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Scale Generative AI Data Engine powers many of the most advanced LLMs and generative models in the world through world-class RLHF, data generation, model evaluation, safety, and alignment.
                </p>
                <div className="flex gap-3 pt-4">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg font-medium text-base shadow-lg transition-colors duration-200"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
                    }}
                    whileTap={{ scale: 0.97, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17,
                    }}
                  >
                    Book a Demo
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-brand-orange border-2 border-brand-orange rounded-lg font-medium text-base transition-colors duration-200"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.2), 0 4px 6px -2px rgba(249, 115, 22, 0.1)'
                    }}
                    whileTap={{ scale: 0.97, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17,
                    }}
                  >
                    Build AI
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

