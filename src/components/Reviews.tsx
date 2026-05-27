import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Reviews() {
  const testimonials: TestimonialItem[] = [
    {
      id: 'rev-1',
      name: 'Marina Santos',
      role: 'Moradora do Bairro há 4 anos',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
      rating: 5,
      date: 'Há 2 dias',
      text: 'Fazer compras no Empório Fresh virou rotina aqui em casa. Os legumes, verduras e o pão artesanal vêm sempre limpinhos, fresquinhos e bem separados. Além de tudo, a entrega por motoboy é super rápida, costuma chegar em menos de 45 minutos. Atendimento nota mil pelo WhatsApp!',
      isVerified: true
    },
    {
      id: 'rev-2',
      name: 'Thiago Oliveira',
      role: 'Cliente Frequente',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      rating: 5,
      date: 'Há 1 semana',
      text: 'O açougue deles é simplesmente espetacular! Faço o pedido da carne já fatiada tirada sob medida e com o corte perfeito para o churrasco de fim de semana ou para as marmitas. Tudo higienizado, selado a vácuo, de extrema confiança. Não troco por nenhum mercado grande.',
      isVerified: true
    },
    {
      id: 'rev-3',
      name: 'Sandra Souza',
      role: 'Dona de Casa',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
      rating: 5,
      date: 'Há 3 semanas',
      text: 'Esqueci de comprar os temperos e o tomate para o almoço de domingo. Mandei mensagem no WhatsApp do Empório, fiz o pedido e em 30 minutos o motoboy já estava buzinando no portão. Salvou meu almoço de família com produtos incríveis e frete super em conta!',
      isVerified: true
    },
    {
      id: 'rev-4',
      name: 'Carlos Mendes',
      role: 'Condomínio Spazio',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
      rating: 5,
      date: 'Há 1 mês',
      text: 'Excelência em cada detalhe. O atendimento no WhatsApp é ágil e as pessoas são super educadas, mandam até foto das frutas se você pedir. A adega deles tem vinhos ótimos e cervejas sempre muito geladas para buscar de última hora. Facilidade e honestidade sem filas chatas.',
      isVerified: true
    },
    {
      id: 'rev-5',
      name: 'Patrícia Lima',
      role: 'Nutricionista',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
      rating: 5,
      date: 'Há 1 mês',
      text: 'Como nutricionista, sou extremamente rigorosa com o frescor dos alimentos dos meus pacientes e da minha própria casa. A curadoria do Empório Fresh é sensacional, dá para ver que selecionam cada folha manualmente. Hortifruti de extrema qualidade e procedência garantida.',
      isVerified: true
    },
    {
      id: 'rev-6',
      name: 'Renato Ferreira',
      role: 'Aposentado',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150',
      rating: 5,
      date: 'Há 2 meses',
      text: 'Fazer feira costumava ser muito cansativo para mim por causa do peso das sacolas. Agora só peço pelo WhatsApp com a ajuda do meu filho. Eles entregam na minha porta, tudo muito fresquinho, os meninos do entrega são muito educados e cuidadosos. Recomendo muito aos vizinhos.',
      isVerified: true
    }
  ];

  return (
    <section 
      id="reviews" 
      className="py-20 md:py-28 bg-[#050a06]/95 relative overflow-hidden"
    >
      {/* Back Glow Objects */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-[#22c55e]/5 rounded-full blur-[110px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 pb-12 border-b border-white/5">
          
          <div className="text-left max-w-xl">
            <span className="text-xs font-mono font-semibold uppercase text-primary tracking-widest block mb-3">
              ⭐ FEEDBACK DE QUEM JÁ COMPRA
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
              O Que Dizem Nossos Clientes do Bairro
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
              Temos um compromisso inegociável com a satisfação. Veja a experiência real das famílias que abastecem a despensa conosco diariamente sem estresse.
            </p>
          </div>

          {/* Google Star Rating Summary Card (Estilo Google Reviews) */}
          <div className="glass-card rounded-2xl p-6 md:p-8 flex items-center gap-6 border border-white/10 shrink-0 shadow-[0_4px_30px_rgba(34,197,94,0.1)]">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-display font-black text-white">4.9</span>
              <span className="text-xs font-mono text-gray-400 uppercase mt-1">De 5.0 Estrelas</span>
            </div>
            
            <div className="h-12 w-[1px] bg-white/10"></div>

            <div className="flex flex-col">
              {/* Stars indicator rows */}
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <CheckCircle className="w-4.5 h-4.5 text-primary" />
                <span className="text-xs font-medium text-white/90">
                  Selo de Verificação Real Google Reviews
                </span>
              </div>
              
              <p className="text-[10px] text-gray-400 font-mono mt-1">
                Baseado em 520+ avaliações locais no bairro
              </p>
            </div>
          </div>

        </div>

        {/* 6 High Credibility Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group glass-card rounded-3xl p-6 md:p-8 border border-white/5 hover:border-primary/20 hover:shadow-[0_10px_35px_rgba(34,197,94,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Upper row: Avatar, name, Verified badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 bg-emerald-950/40"
                    />
                    <div>
                      <h4 className="text-white font-display font-bold text-sm md:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Verified check badge in green */}
                  {testimonial.isVerified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                      <CheckCircle className="w-3 h-3 fill-current" />
                      <span>Verificado</span>
                    </span>
                  )}
                </div>

                {/* Stars block */}
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm md:text-sm leading-relaxed mb-6 italic relative">
                  <Quote className="absolute -top-3 -left-2 w-8 h-8 text-white/[0.03] pointer-events-none" />
                  "{testimonial.text}"
                </p>
              </div>

              {/* Time reference card footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Avaliado via Google</span>
                <span>{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
