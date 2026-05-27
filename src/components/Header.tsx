import React, { useState } from 'react';
import { Menu, X, MessageCircle, Leaf } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Qualidades', href: '#features' },
    { name: 'Nossa Seleção', href: '#portfolio' },
    { name: 'Oferta Especial', href: '#urgency' },
    { name: 'Depoimentos', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-4">
      <div className="max-w-7xl mx-auto glass-nav rounded-2xl px-4 md:px-8 py-3 flex items-center justify-between shadow-2xl transition-all duration-300">
        
        {/* Brand Logo */}
        <a id="nav-logo" href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <Leaf className="w-6 h-6 fill-primary/10" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl tracking-wide text-white group-hover:text-primary transition-colors">
              Empório Fresh
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#22c55e] uppercase">
              Hortifruti & Conveniência
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-all duration-200 uppercase tracking-wider text-[11px] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            id="nav-cta"
            href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-[#050a06] font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(34,197,94,0.35)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Fazer Pedido</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Panel */}
      {isMenuOpen && (
        <div
          id="mobile-menu-bg"
          onClick={toggleMenu}
          className="fixed inset-0 top-[76px] bg-[#050a06]/90 backdrop-blur-md z-40 transition-opacity duration-300 flex justify-end p-4"
        >
          <div
            id="mobile-menu"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm glass-card rounded-2xl p-6 flex flex-col gap-6 shadow-2xl h-fit border border-white/10"
          >
            <span className="text-xs font-mono text-primary uppercase tracking-widest border-b border-primary/20 pb-2">
              Menu do Cliente
            </span>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-base font-semibold text-white/95 hover:text-primary hover:pl-2 transition-all duration-200 flex items-center gap-2 py-1 border-b border-white/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                  {link.name}
                </a>
              ))}
            </div>
            
            <a
              id="mobile-nav-cta"
              href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-[#050a06] font-bold text-base transition-all shadow-[0_4px_20px_rgba(34,197,94,0.4)] glow-btn active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Pedir pelo WhatsApp</span>
            </a>
            
            <div className="text-center pt-2">
              <span className="text-[11px] text-gray-400 font-mono">
                📞 Delivery rápido: (11) 99999-0003
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
