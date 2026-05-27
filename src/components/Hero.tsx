import React from 'react';
import { MessageCircle, Star, ShieldCheck, Clock, Apple, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#050a06]"
    >
      {/* Glow Neon Background Blurs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[180px] pointer-events-none -z-10 animate-pulse duration-5000"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#16a34a]/5 rounded-full blur-[90px] md:blur-[150px] pointer-events-none -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        
        {/* Top Floating Badge with Soft Slide-in Animation */}
        <div 
          id="hero-badge"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/20 shadow-[0_0_15px_rgba(34,197,94,0.15)] text-[#22c55e] text-xs font-mono font-medium tracking-wide mb-8 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          <span>Sua Despensa Sempre Abastecida &bull; Direto do Produtor</span>
        </div>

        {/* Hero Display Title: Gradient from #22c55e to pure white */}
        <h1 
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] max-w-5xl mb-6 flex flex-col text-center"
        >
          <span className="text-white">O hortifruti mais</span>
          <span className="bg-gradient-to-r from-primary via-[#4ade80] to-white bg-clip-text text-transparent pb-2 drop-shadow-[0_2px_40px_rgba(34,197,94,0.25)]">
            fresco do produtor e
          </span>
          <span className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-2 tracking-wide block">
            mantimentos essenciais sem fila
          </span>
        </h1>

        {/* Persuasive Subtitle */}
        <p 
          id="hero-subtitle"
          className="text-gray-300 antialiased font-sans text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10"
        >
          Segurança de uma dispensa abastecida diariamente com produtos selecionados na conveniência de sua vizinhança.
        </p>

        {/* Core Pulsating Glow CTA Button & Google Reviews trust indicator */}
        <div 
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 mb-16"
        >
          <a
            id="hero-primary-cta"
            href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-primary text-[#050a06] font-display font-bold text-lg transition-all transform shadow-[0_0_35px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] hover:scale-105 hover:bg-[#1ebd56] active:scale-95 glow-btn select-none cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-current animate-bounce" />
            <span>Peça Pelo WhatsApp &bull; Até 1h Na Porta</span>
          </a>

          <a
            id="hero-secondary-cta"
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/25 transition-all active:scale-95 cursor-pointer"
          >
            <span>Ver Produtos do Dia</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </a>
        </div>

        {/* 3 Pillars of trust / Features Quick Cards */}
        <div 
          id="hero-pillars"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
        >
          <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all flex items-start text-left gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">Qualidade Nota 4.9</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Mais de 520 famílias satisfeitas do bairro com entrega semanal impecável.</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all flex items-start text-left gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">Entrega em até 1 Hora</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Chega fresquinho na sua porta rápido com motoboy dedicado do bairro.</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all flex items-start text-left gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">Curadoria Diária</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Legumes, verduras e carnes inspecionados individualmente antes do envio.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
