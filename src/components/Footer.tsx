"use client";

import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Crown } from 'lucide-react';
// Importando ícones oficiais de marcas via react-icons
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Sobre */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="bg-dark-900 border border-dark-800 p-2 rounded-lg text-primary group-hover:border-primary/50 transition-colors">
                <Crown size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-none">THE KING</span>
                <span className="text-[10px] text-primary uppercase tracking-widest">O Rei do iPhone</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Assistência técnica especializada Apple e todas as marcas em Belém. <br/>
              Loja especializada em celulares, tablets e vendas de acessórios. <br/>
              Assistência avançada para reparos de placa, troca de vidro e bateria com qualidade original.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/thekingoreidophone/" target='_blank' className="w-10 h-10 rounded-full bg-dark-900 flex items-center justify-center hover:bg-primary hover:text-dark-950 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/thekingoreidoiphone/" target='_blank' className="w-10 h-10 rounded-full bg-dark-900 flex items-center justify-center hover:bg-primary hover:text-dark-950 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Contato Rápido */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-sm">
                  Tv. São Pedro, 710 - LOJA C - Batista Campos,<br />
                  Belém - PA, 66030-465 <br />
                  <a href="https://www.google.com/maps/dir//Tv.+S%C3%A3o+Pedro,+710+-+LOJA+C+-+Batista+Campos,+Bel%C3%A9m+-+PA,+66030-465/@-1.4519568,-48.4693655,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x92a48f61ea08a77d:0x5c4991dbce75bc92!2m2!1d-48.4946302!2d-1.459736?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" className="text-primary hover:underline text-xs mt-1 inline-block" target="_blank">Ver no mapa</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-sm">(91) 98031-8570</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-sm">contato@thekingiphone.com.br</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Úteis */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Troca de Tela</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Troca de Bateria</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Reparo de Placa</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Face ID</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Banho Químico</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Horários */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Horário de Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-dark-800 pb-2">
                <span>Segunda a Sexta</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-dark-800 pb-2">
                <span>Sábado</span>
                <span className="text-white">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between text-white">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-dark-900 rounded-xl border border-dark-800">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-primary" size={20} />
                <span className="text-white font-bold text-sm">Status Agora:</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-500 text-xs font-bold uppercase">Loja Aberta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Dev Credits */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-dark-500 order-2 md:order-1">
            &copy; {currentYear} The King Assistência Técnica. Todos os direitos reservados.
          </p>
          
          {/* Créditos do Desenvolvedor com Ícones Oficiais */}
          <div className="flex flex-col sm:flex-row items-center gap-4 order-1 md:order-2">
            <span className="text-xs text-gray-500">
              Desenvolvido por <a href="https://iamlucasdev.com" target="_blank" className="text-white hover:text-primary transition-colors font-medium">Lucas Fernandes</a>
            </span>
            
            <span className="hidden sm:block text-dark-700">|</span>

            {/* Ícones da Stack (Agora usando react-icons) */}
            <div className="flex items-center gap-3">
               <a href="https://nextjs.org" target="_blank" title="Built with Next.js" className="text-gray-500 hover:text-white transition-colors">
                  <SiNextdotjs size={18} />
               </a>
               <a href="https://tailwindcss.com" target="_blank" title="Styled with Tailwind CSS" className="text-gray-500 hover:text-[#38BDF8] transition-colors">
                  <SiTailwindcss size={18} />
               </a>
               <a href="https://www.typescriptlang.org" target="_blank" title="Coded with TypeScript" className="text-gray-500 hover:text-[#3178C6] transition-colors">
                  <SiTypescript size={18} />
               </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}