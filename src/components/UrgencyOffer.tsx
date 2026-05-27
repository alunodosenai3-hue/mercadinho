import React, { useState, useEffect } from 'react';
import { Clock, MessageCircle, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function UrgencyOffer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset to 15:00 to keep it realistic and ticking for the next session
          return 15 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const minsStr = mins < 10 ? `0${mins}` : `${mins}`;
    const secsStr = secs < 10 ? `0${secs}` : `${secs}`;
    return { minsStr, secsStr };
  };

  const { minsStr, secsStr } = formatTime(timeLeft);

  return (
    <section 
      id="urgency" 
      className="py-16 md:py-24 bg-[#050a06] relative overflow-hidden"
    >
      {/* Dynamic Pulsating Glow Accent on the Back */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] md:blur-[180px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Core Offer Promo Banner Glass Setup */}
        <div className="relative glass-card rounded-[32px] p-8 md:p-16 border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.15)] hover:shadow-[0_0_70px_rgba(34,197,94,0.25)] transition-all">
          
          {/* Top light glow header indicator */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Promo Left Panel information */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-6 w-fit">
                <Truck className="w-4 h-4" />
                <span>Super Condição Especial Limitada</span>
              </div>

              <span className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-2">
                OFERTA DA VIZINHANÇA
              </span>
              
              {/* Highlight Condition Text - Large Glow */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-black text-white leading-tight mb-6">
                Frete Grátis na primeira compra{' '}
                <span className="bg-gradient-to-r from-primary via-[#4ade80] to-white bg-clip-text text-transparent block md:inline">
                  acima de R$100 reais
                </span>
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                Ganhe frete 100% gratuito direto na primeira entrega do seu sacolão semanal de hortifruti e mantimentos de despensa do bairro. Promoção válida exclusivamente enquanto houver motoboys livres na região.
              </p>

              {/* Crucial Delivery Guarantee Quote text */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  <span className="text-white font-bold">Garantia Empório Fresh:</span> "Garantia de atendimento e entrega em até Entrega rápida na sua porta em até 1 hora no bairro."
                </p>
              </div>

            </div>

            {/* Promo Right Panel: Javascript Countdown Clock Timer */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 border border-white/5 relative">
              
              {/* Spinning Clock Glow Background */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>

              <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold mb-4">
                O tempo está acabando! Promoção expira em:
              </span>

              {/* Visual Clock Digits */}
              <div className="flex items-center gap-3 mb-8">
                
                {/* Minute box */}
                <div className="flex flex-col items-center">
                  <div className="w-20 md:w-24 h-20 md:h-24 rounded-2xl bg-white/5 border border-white/10 shadow-lg flex items-center justify-center text-4xl md:text-5xl font-display font-black text-[#22c55e] animate-pulse">
                    {minsStr}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 mt-2">Minutos</span>
                </div>

                <div className="text-3xl md:text-4xl font-black text-white/50 -translate-y-3">
                  :
                </div>

                {/* Second box */}
                <div className="flex flex-col items-center">
                  <div className="w-20 md:w-24 h-20 md:h-24 rounded-2xl bg-white/5 border border-white/10 shadow-lg flex items-center justify-center text-4xl md:text-5xl font-display font-black text-white relative">
                    {secsStr}
                    {/* Pulsing indicator light */}
                    <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 mt-2">Segundos</span>
                </div>

              </div>

              {/* Extremely Prominent Pulsating Call-to-action */}
              <a
                id="urgency-whatsapp-cta"
                href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4.5 rounded-xl bg-primary hover:bg-[#1ebd56] text-[#050a06] font-display font-extrabold text-base md:text-lg transition-all scale-100 hover:scale-105 shadow-[0_4px_30px_rgba(34,197,94,0.4)] active:scale-95 glow-btn text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current animate-bounce" />
                <span>Aproveitar Frete Grátis</span>
              </a>

              <span className="text-[11px] text-gray-400 font-mono mt-4 text-center">
                👉 Clique acima para abrir no WhatsApp com o código promocional.
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
