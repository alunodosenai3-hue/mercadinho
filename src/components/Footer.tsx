import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, ShieldCheck, Leaf, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020503] text-gray-400 font-sans pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Visual background blend glow */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Branch 1: Brand details */}
        <div className="flex flex-col gap-4 text-left">
          <a href="#home" className="flex items-center gap-2 group mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <Leaf className="w-6 h-6 fill-primary/10" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors">
                Empório Fresh
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#22c55e] uppercase">
                Hortifruti & Conveniência
              </span>
            </div>
          </a>
          
          <p className="text-sm leading-relaxed text-gray-400">
            A segurança e a praticidade de uma despensa abastecida diariamente com produtos selecionados na conveniência da sua vizinhança. Direto do produtor rural para sua mesa.
          </p>

          <div className="flex items-center gap-2 mt-4 text-xs font-mono text-gray-500 bg-white/5 p-3 rounded-xl border border-white/5 w-fit">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>Empório Fresh Mercado e Hortifruti</span>
          </div>
        </div>

        {/* Branch 2: Quick Links */}
        <div className="flex flex-col gap-6 text-left md:pl-8">
          <h3 className="text-white font-display font-bold text-base uppercase tracking-wider">
            Navegação
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Voltar ao Início
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-primary transition-colors">
                Vantagens e Benefícios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-primary transition-colors">
                Vitrine de Produtos
              </a>
            </li>
            <li>
              <a href="#urgency" className="hover:text-primary transition-colors">
                Oferta Exclusiva 15m
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-primary transition-colors">
                Avaliações de Clientes
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition-colors">
                Dúvidas FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Branch 3: Contact details */}
        <div className="flex flex-col gap-6 text-left">
          <h3 className="text-white font-display font-bold text-base uppercase tracking-wider">
            Contatos & Suporte
          </h3>
          <ul className="flex flex-col gap-4 text-sm">
            
            {/* WhatsApp Contact */}
            <li className="flex items-center gap-2.5">
              <a 
                href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all font-semibold"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <MessageCircle className="w-4.5 h-4.5 fill-current" />
                </div>
                <span>WhatsApp: (11) 99999-0003</span>
              </a>
            </li>

            {/* Email Contact */}
            <li className="flex items-center gap-2.5 text-gray-300">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 shrink-0">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <a href="mailto:contato@emporiofresh.com.br" className="hover:text-primary transition-colors">
                contato@emporiofresh.com.br
              </a>
            </li>

            {/* Telephone Contact */}
            <li className="flex items-center gap-2.5 text-gray-300">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 shrink-0">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <span>Comercial: (11) 99999-0003</span>
            </li>

          </ul>
        </div>

        {/* Branch 4: Social media & Verification badging */}
        <div className="flex flex-col gap-6 text-left">
          <h3 className="text-white font-display font-bold text-base uppercase tracking-wider">
            Siga-nos no Bairro
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Acompanhe nossas novidades, panquecas e receitas diárias feitas com carinho com produtos de hortifruti direto nos stories do nosso perfil oficial do bairro!
          </p>
          
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com/emporiofresh.bairro" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary hover:text-[#050a06] text-gray-300 border border-white/10 flex items-center justify-center transition-all cursor-pointer"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a 
              href="https://facebook.com/emporiofresh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary hover:text-[#050a06] text-gray-300 border border-white/10 flex items-center justify-center transition-all cursor-pointer"
            >
              <Facebook className="w-5 h-5" />
            </a>
            
            {/* Google Rating indication */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/5 py-2 px-3 rounded-xl ml-auto">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-xs font-mono text-white font-bold">4.9/5</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 border-t border-white/5 pt-4">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">
              Cadastro Google Meu Negócio Ativo
            </span>
          </div>
        </div>

      </div>

      {/* Under copyright section */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 text-nowrap">
        <span>&copy; {currentYear} Empório Fresh &bull; Todos os direitos reservados.</span>
        <span>Desenvolvido com Copywriting Psicológico & Atendimento Humano</span>
      </div>

    </footer>
  );
}
