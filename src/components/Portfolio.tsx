import React, { useState } from 'react';
import { Eye, ExternalLink, Heart, ShoppingCart } from 'lucide-react';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', name: 'Mostrar Tudo' },
    { id: 'hortifruti', name: '🥬 Hortifruti' },
    { id: 'carnes', name: '🥩 Carnes Premium' },
    { id: 'conveniencia', name: '🛒 Conveniência & Adega' }
  ];

  const items: PortfolioItem[] = [
    {
      id: 'port-1',
      title: 'Hortifruti Orgânico',
      category: 'hortifruti',
      imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
      hoverActionText: 'Ver Seleção do Dia'
    },
    {
      id: 'port-2',
      title: 'Cortes Especiais Certificados',
      category: 'carnes',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
      hoverActionText: 'Pedir Fatiamento'
    },
    {
      id: 'port-3',
      title: 'Adega Selecionada',
      category: 'conveniencia',
      imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600',
      hoverActionText: 'Ver Rótulos Frios'
    },
    {
      id: 'port-4',
      title: 'Padaria & Pães Artesanais',
      category: 'conveniencia',
      imageUrl: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
      hoverActionText: 'Pedir Fornada Quente'
    },
    {
      id: 'port-5',
      title: 'Combinações Hortifruti Prontas',
      category: 'hortifruti',
      imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
      hoverActionText: 'Montar Kit Salada'
    },
    {
      id: 'port-6',
      title: 'Dispensa Abastecida Conveniência',
      category: 'conveniencia',
      imageUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600',
      hoverActionText: 'Adicionar à Cesta'
    }
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <section 
      id="portfolio" 
      className="py-20 md:py-28 bg-[#050a06]/95 relative overflow-hidden"
    >
      {/* Decorative Blur Object */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase text-primary tracking-widest block mb-3">
              📦 Vitrine Empório Fresh
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
              Galeria de Produtos & Alimentos Selecionados
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4">
              Cada alimento passa por um teste tátil e de frescor antes de ser catalogado para envio. Escolha abaixo a categoria que deseja explorar hoje.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 lg:self-center shrink-0">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all border cursor-pointer ${
                  selectedCategory === category.id 
                    ? 'bg-primary text-[#050a06] border-primary shadow-[0_0_15px_rgba(34,197,94,0.3)] font-bold' 
                    : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 hover:shadow-[0_10px_35px_rgba(34,197,94,0.15)] transition-all duration-300"
            >
              {/* Image box with overflow hidden */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark Mask on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  
                  {/* Floating Action Badge inside mask */}
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 border border-primary/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingCart className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-primary uppercase tracking-widest mb-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400 delay-75">
                    Fazer Pedido Direto
                  </span>
                  <h4 className="text-lg font-display font-bold text-white mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.title}
                  </h4>
                  
                  {/* Whatsapp CTA within Grid */}
                  <a
                    href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-[#050a06] font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150 cursor-pointer"
                  >
                    <span>{item.hoverActionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Left Floating Category Tag */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050a06]/85 backdrop-blur-md border border-white/10 text-gray-300 text-[10px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  {item.category === 'hortifruti' && 'Hortifruti'}
                  {item.category === 'carnes' && 'Carnes Premium'}
                  {item.category === 'conveniencia' && 'Conveniência & Adega'}
                </span>
                
                {/* Right Save Heart Button */}
                <button 
                  aria-label="Add to favorites"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#050a06]/80 text-gray-300 hover:text-red-500 hover:bg-white/10 transition-colors flex items-center justify-center border border-white/5 cursor-pointer"
                >
                  <Heart className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Description underneath card */}
              <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-white font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#22c55e] text-xs font-mono mt-1">
                    Disponível com entrega imediata
                  </p>
                </div>
                
                <a
                  href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary hover:text-[#050a06] text-gray-300 border border-white/15 hover:border-primary flex items-center justify-center transition-all shrink-0 cursor-pointer"
                >
                  <ExternalLink className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
