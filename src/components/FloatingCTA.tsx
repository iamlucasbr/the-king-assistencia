"use client";

import { MessageCircle } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '@/lib/contact';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-2xl cursor-pointer hover:shadow-[#25D366]/40 transition-shadow"
        >
          <span className="hidden md:inline font-bold pr-2">Orçamento Online</span>
          <MessageCircle size={28} fill="white" className="text-white" />
          
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}