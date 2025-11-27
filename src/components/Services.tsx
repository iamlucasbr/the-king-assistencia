"use client";

import { motion } from 'framer-motion';
import { Smartphone, Battery, Cpu, Droplets, Camera, ScanFace, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/contact'; // Importando a constante

const services = [
  {
    icon: <Smartphone size={32} />,
    title: "Troca de Tela Premium",
    desc: "Vidros originais e telas OLED com calibração de True Tone.",
    highlight: true 
  },
  {
    icon: <Battery size={32} />,
    title: "Bateria de Alta Performance",
    desc: "Substituição com saúde em 100% e garantia estendida.",
    highlight: false
  },
  {
    icon: <Cpu size={32} />,
    title: "Reparo Avançado de Placa",
    desc: "Recuperamos aparelhos condenados por outras assistências.",
    highlight: false
  },
  {
    icon: <ScanFace size={32} />,
    title: "Reparo de Face ID",
    desc: "Seu rosto, sua senha. Trazemos a segurança de volta.",
    highlight: false
  },
  {
    icon: <Droplets size={32} />,
    title: "Desoxidação (Banho Químico)",
    desc: "Caiu na água? Tratamento profissional para evitar corrosão.",
    highlight: false
  },
  {
    icon: <Camera size={32} />,
    title: "Câmeras e Lentes",
    desc: "Volte a tirar fotos cristalinas. Troca de lentes e módulos.",
    highlight: false
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Soluções Completas para seu <span className="text-primary">Apple e todas as marcas do mercado.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Utilizamos ferramentas de precisão e peças originais para garantir que seu dispositivo saia daqui como novo.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 cursor-default
                ${service.highlight 
                  ? 'bg-white dark:bg-dark-800 border-2 border-primary/20 shadow-xl shadow-primary/5' 
                  : 'bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-700 hover:border-primary/30 shadow-lg hover:shadow-xl'
                }
              `}
            >
              {/* Ícone com brilho no hover */}
              <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-dark-900 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-dark-700">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Link Simulado "Saiba mais" - Agora é um <a> funcional */}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 cursor-pointer"
              >
                Solicitar Orçamento <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Final da Seção */}
        <div className="mt-16 text-center">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold hover:text-primary transition-colors border-b-2 border-primary pb-1 cursor-pointer"
          >
            Ver lista completa de serviços <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}