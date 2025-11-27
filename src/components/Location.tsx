"use client";

import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="relative h-[600px] w-full bg-dark-950 flex items-center justify-center overflow-hidden">
      
      {/* Google Maps Iframe (Full Width) */}
      <div className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=The%20King%20O%20Rei%20Do%20Iphone%20Belém&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
        ></iframe>
      </div>

      {/* Overlay Gradiente para suavizar a transição com o footer */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      {/* Card Flutuante de Informações */}
      <div className="container mx-auto px-4 relative z-10 pointer-events-none flex justify-center md:justify-end">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border border-gray-200 dark:border-dark-800 p-8 rounded-3xl shadow-2xl max-w-md w-full pointer-events-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-hover">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Venha nos visitar</h3>
              <p className="text-sm text-primary font-medium">Estacionamento Gratuito</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <MapPin className="mt-1 shrink-0 text-gray-400" size={18} />
              <p className="text-sm leading-relaxed">
                <strong>Tv. São Pedro, 710 - Loja C</strong><br />
                Batista Campos, Belém - PA<br />
                <span className="text-xs text-gray-400">(Próximo ao Pátio Belém)</span>
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Clock className="shrink-0 text-gray-400" size={18} />
              <p className="text-sm">
                Seg - Sex: 08:00 às 18:00 <br />
                Sáb: 09:00 às 17:00
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Phone className="shrink-0 text-gray-400" size={18} />
              <p className="text-sm">(91) 98031-8570</p>
            </div>
          </div>

          <a 
            href="https://maps.google.com?q=The+King+O+Rei+Do+Iphone" 
            target="_blank"
            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white dark:text-dark-950 font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-primary/25"
          >
            <Navigation size={18} />
            Abrir Rota no GPS
          </a>

        </motion.div>
      </div>

    </section>
  );
}