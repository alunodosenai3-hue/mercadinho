import React from 'react';
import { Leaf, Award, MessageCircle, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function Features() {
  const coreBenefits = [
    {
      id: 'benefit-1',
      title: 'Hortifruti Super Fresco',
      badge: 'Colheita Diária',
      description: 'Bancas de hortifruti colhidos e repostos todos os dias diretamente do produtor rural para preservar a máxima doçura, nutrientes e crocância.',
      text: 'Bancas de hortifruti colhidos e repostos todos os dias',
      bulletIcon: Leaf,
      iconBg: 'from-[#22c55e]/30 to-[#15803d]/10'
    },
    {
      id: 'benefit-2',
      title: 'Açougue de Alta Linha',
      badge: 'Cortes Especiais',
      description: 'Açougue com cortes certificados premium e fatiamento sob medida. Nossos açougueiros preparam a carne exatamente do jeito que você precisa para a sua refeição ou churrasco.',
      text: 'Açougue com cortes certificados premium e fatiamento sob medida',
      bulletIcon: Award,
      iconBg: 'from-[#15803d]/30 to-[#166534]/10'
    },
    {
      id: 'benefit-3',
      title: 'Express WhatsApp Delivery',
      badge: 'Atendimento Prático',
      description: 'Chega de carregar sacolas pesadas ou perder tempo em filas de caixa. Pedidos fáceis por WhatsApp com recebimento expresso e seguro diretamente em sua casa.',
      text: 'Pedidos fáceis por WhatsApp com recebimento expresso e seguro',
      bulletIcon: MessageCircle,
      iconBg: 'from-[#22c55e]/40 to-[#050a06]/20'
    }
  ];

  return (
    <section 
      id="features" 
      className="py-20 md:py-28 bg-[#050a06] relative overflow-hidden"
    >
      {/* Decorative Radial Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            Qualidade, Variedade e Rapidez Garantida
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
            Curadoria Diária de Alimentos para Sua Casa
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-sans leading-relaxed">
            "Fazemos curadoria minuciosa diariamente para oferecer legumes, frutas, carnes e adega qualificados."
          </p>
        </div>

        {/* Benefits Grid - Glassmorphism cards with Spherical Gradients on Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreBenefits.map((benefit, idx) => {
            const IconComponent = benefit.bulletIcon;
            return (
              <div
                key={benefit.id}
                id={benefit.id}
                className="group relative glass-card rounded-3xl p-8 md:p-10 border border-white/5 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow effect indicator inside */}
                <div className="absolute top-0 left-0 w-full h-[3px] rounded-t-3xl bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  {/* Icon wrap with spherical gradients of primary cor #22c55e */}
                  <div className="relative mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[#15803d] p-[1.5px] shadow-[0_4px_15px_rgba(34,197,94,0.25)] group-hover:shadow-[0_4px_25px_rgba(34,197,94,0.45)] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-[#050a06] flex items-center justify-center relative overflow-hidden">
                      {/* Innermost glow radial gradient sphere */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
                      <IconComponent className="w-8 h-8 text-primary relative z-10" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold block mb-2">
                    {benefit.badge}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>

                {/* Main bold claim card footer bullet point */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-2.5 text-xs text-white/90 font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Zap className="w-3 h-3 fill-current" />
                  </div>
                  <span className="italic">"{benefit.text}"</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Assurance Hook banner */}
        <div className="mt-16 glass-card rounded-2xl p-6 md:p-8 border border-white/5 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-primary/25 transition-all">
          <div className="text-left">
            <h4 className="text-white font-bold text-lg mb-1">Deseja receber a lista completa de ofertas do dia?</h4>
            <p className="text-gray-400 text-xs">Atualizamos nossos estoques todas as manhãs às 07:00 com os hortifrutis mais frescos.</p>
          </div>
          <a
            id="features-cta"
            href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-nowrap flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/95 text-[#050a06] font-display font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(34,197,94,0.3)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar Distribuição Diária</span>
          </a>
        </div>

      </div>
    </section>
  );
}
