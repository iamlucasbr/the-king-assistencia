"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Ana Clara Silva",
    text: "Pensei que tinha perdido meu iPhone 13 Pro Max. Eles recuperaram a placa em 2 dias. Serviço impecável!",
    stars: 5,
  },
  {
    name: "Ricardo Oliveira",
    text: "Atendimento top! Trocaram a bateria na minha frente em 40 minutos. O cafézinho também é ótimo.",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    text: "Preço justo e honestidade. Em outra loja condenaram meu aparelho, aqui resolveram com uma limpeza química.",
    stars: 5,
  },
  {
    name: "Lucas Mendes",
    text: "A melhor assistência de Belém. O ambiente é super confortável e os técnicos sabem muito.",
    stars: 5,
  },
  {
    name: "Patricia Santos",
    text: "Troquei o vidro traseiro e ficou original de novo. Recomendo demais!",
    stars: 5,
  },
];

// Duplicandoo a lista para criar o efeito de loop infinito sem buracos
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-dark-950 overflow-hidden border-t border-gray-100 dark:border-dark-800">
      
      <div className="container mx-auto px-4 mb-12 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="flex text-primary">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="font-bold text-gray-900 dark:text-white">4.9/5 no Google</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          O que dizem sobre a <span className="text-primary">The King o Rei do Iphone</span>
        </h2>
      </div>

      {/* Container do Marquee com Máscara de Gradiente nas pontas */}
      <div className="relative w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-white before:to-transparent dark:before:from-dark-950 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-white after:to-transparent dark:after:from-dark-950">
        
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: "-50%" }} // Move metade do caminho
          transition={{
            duration: 30, // Velocidade (quanto maior, mais lento)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="w-[350px] p-6 rounded-2xl bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-800 flex-shrink-0 relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4 text-primary">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-700 dark:to-dark-800 flex items-center justify-center font-bold text-gray-500 dark:text-gray-400">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-green-600 dark:text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Cliente Verificado
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}