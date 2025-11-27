"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { WHATSAPP_LINK } from '@/lib/contact'; // Importando a constante

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '#servicos' },
    // Item "Acompanhar Reparo" removido conforme decisão de escopo
    { name: 'Contato', href: '#localizacao' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/90 dark:bg-dark-950/90 backdrop-blur-md border-gray-200 dark:border-dark-800 py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo The King */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover:blur-md transition-all" />
              <div className="relative bg-dark-900 border border-dark-700 p-2 rounded-xl text-primary group-hover:scale-105 transition-transform">
                <Crown size={24} strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-gray-900 dark:text-white">
                THE KING
              </span>
              <span className="text-[10px] font-medium tracking-widest text-primary uppercase">
                O Rei do iPhone
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              className="bg-primary hover:bg-primary-hover text-white dark:text-dark-950 font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer"
            >
              Orçamento Rápido
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-950 border-b border-gray-200 dark:border-dark-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-900 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-2">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="w-full bg-primary text-dark-950 font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}