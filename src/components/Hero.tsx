"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/contact'; // Importando a constante

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-950 pt-10 pb-20 lg:pt-24 lg:pb-32">
      
      {/* Background Decorativo (Luzes Douradas) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Texto Principal */}
          <div className="flex-1 text-center lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-hover text-xs font-bold uppercase tracking-wider mb-6"
            >
              <CrownIcon />
              <span>Padrão Apple de Qualidade</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
            >
              Seu iPhone Novo, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                De Novo.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Especialistas em reparo avançado de placas e troca de vidro. 
              Traga a vida de volta ao seu dispositivo com peças originais e garantia real.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white dark:text-dark-950 font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all hover:scale-105 cursor-pointer"
              >
                Orçamento via WhatsApp
                <ArrowRight size={20} />
              </a>
              <Link 
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-900 dark:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Ver Nossos Serviços
              </Link>
            </motion.div>

            {/* Badges de Confiança (Trust) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-gray-200 dark:border-dark-800 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary" size={20} />
                <span>Garantia de 90 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                <span>Reparo em até 40min*</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} />
                <span>Técnicos Certificados</span>
              </div>
            </motion.div>
          </div>

          {/* Área da Imagem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-full"
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-dark-900 border border-dark-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-950" />
              <div className="absolute inset-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                     <SmartphoneIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">The King</h3>
                  <p className="text-gray-400 text-sm">O Rei do iPhone</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function CrownIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-3-4 3-6-7z"/></svg>
}

function SmartphoneIcon() {
   return <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dark-950"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
}