"use client";

import { motion } from 'framer-motion';
import { Microscope, Award, ShieldCheck, Zap, Star } from 'lucide-react';

const stats = [
  {
    value: "+50.000",
    label: "Celulares Reparados",
    icon: <Zap className="text-primary" size={24} />
  },
  {
    value: "100%",
    label: "Aprovação em Belém",
    icon: <Star className="text-primary" size={24} />
  },
  {
    value: "+15 anos de mercado",
    label: "Certificação Técnica",
    icon: <Award className="text-primary" size={24} />
  },
  {
    value: "90 Dias",
    label: "Garantia Absoluta",
    icon: <ShieldCheck className="text-primary" size={24} />
  }
];

export default function Difference() {
  return (
    <section className="relative py-24 bg-dark-950 overflow-hidden">
      
      {/* Elementos de Fundo (Luzes Douradas Sutis) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: O Texto de Autoridade */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900 border border-dark-800 text-primary text-sm font-semibold mb-6">
              <Microscope size={18} />
              <span>The King o Rei do Iphone</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Não somos apenas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
                trocadores de peças.
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Enquanto muitos condenam seu aparelho, nós analisamos a microeletrônica. 
              Na <strong>The King</strong>, contamos com equipamentos de alta precisão e ferramentas de nível industrial 
              para realizar reparos em placas lógicas que outras assistências dizem ser impossíveis.
            </p>

            <ul className="space-y-4 mb-8">
              {["Peças Genuínas Apple e Premium", "Transparência Total (Acompanhe seu reparo)", "Técnicos que entendem de engenharia"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-white hover:bg-gray-100 text-dark-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Conheça Nossa Estrutura
            </button>
          </motion.div>

          {/* Lado Direito: Grid de Estatísticas (Glassmorphism) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-dark-900/50 border border-dark-800 backdrop-blur-sm hover:border-primary/30 hover:bg-dark-900 transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-lg bg-dark-950 w-fit border border-dark-800 group-hover:border-primary/20 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}