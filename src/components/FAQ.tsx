import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default to open the first FAQ

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Como funciona a entrega rápida em até 1 hora no bairro?',
      answer: 'Nossa equipe de logística fica de prontidão em nossa base no próprio bairro. Assim que você confirma o seu pedido pelo WhatsApp, realizamos a separação imediata dos produtos higienizados, embalamos com cuidado e um motoboy exclusivo realiza a entrega diretamente na sua porta dentro do prazo limite de até 1 hora.'
    },
    {
      id: 'faq-2',
      question: 'Quais são os bairros oficialmente atendidos pelo Empório Fresh?',
      answer: 'Atendemos a toda a região central e bairros vizinhos em um raio de até 5km de nossa loja física. Se tiver dúvidas se sua rua está na rota, basta nos mandar uma mensagem rápida no WhatsApp com o seu CEP que nossa equipe consulta instantaneamente o tempo estimado para você.'
    },
    {
      id: 'faq-3',
      question: 'É possível escolher o ponto de maturação das frutas e legumes no WhatsApp?',
      answer: 'Com certeza! Essa é a nossa grande vantagem de atendimento humanizado. No WhatsApp, você pode especificar detalhes como "quero bananas maduras para hoje" ou "tomates mais verdes para usar ao longo da semana". Nossos curadores escolhem cada item seguindo à risca as suas preferências.'
    },
    {
      id: 'faq-4',
      question: 'Como é feita a curadoria e seleção das carnes no açougue premium?',
      answer: 'Trabalhamos apenas com carnes de cortes certificados e de fornecedores rigorosamente inspecionados. Elas são mantidas na temperatura ideal de conservação, porcionadas e embaladas a vácuo para garantir o máximo frescor e higiene. Fatiamos sob medida na espessura exata indicada por você.'
    },
    {
      id: 'faq-5',
      question: 'Existe algum valor mínimo para eu realizar um pedido de compras?',
      answer: 'Não exigimos nenhum valor mínimo abusivo para pedidos. Você pode comprar desde uma única cabeça de alface até o estoque para o mês inteiro. No entanto, lembre-se de que pedidos acima de R$100 garantem o benefício do frete grátis na sua primeira compra.'
    },
    {
      id: 'faq-6',
      question: 'Como funciona a promoção de "Frete Grátis acima de R$100 reais"?',
      answer: 'É extremamente simples. Adicione hortifruti, carnes ou produtos de conveniência à sua lista. Ao atingir o valor de R$100 ou mais na sua primeira compra com a gente, a taxa de entrega no valor padrão do bairro é totalmente zerada de forma automática.'
    },
    {
      id: 'faq-7',
      question: 'Quais são as formas de pagamento aceitas e seguras na entrega?',
      answer: 'Oferecemos total segurança no pagamento. Você pode pagar via PIX direto no atendimento ou pagar apenas na entrega na sua porta usando Cartão de Crédito, Débito, Dinheiro ou Vale Refeição (VR/Alelo/Sodexo) através da nossa maquininha sem fio transportada pelo entregador.'
    },
    {
      id: 'faq-8',
      question: 'E se algum produto amassar ou vier estragado, qual é o processo de troca?',
      answer: 'Sua satisfação é assegurada. Caso algum produto da sacola sofra qualquer dano na entrega ou não atenda ao seu padrão de qualidade, basta nos enviar uma foto simples no WhatsApp. Nós fazemos a troca imediata ou estornamos o valor do item no PIX na mesma hora, sem burocracias ou discussões.'
    },
    {
      id: 'faq-9',
      question: 'Consigo programar o melhor horário de entrega para o meu dia?',
      answer: 'Sim, você tem total flexibilidade! Caso não queira a entrega imediata em até 1 hora, basta indicar no atendimento qual horário comercial do dia seria mais conveniente para você receber as compras, ou até mesmo programar a entrega para outro dia da semana.'
    },
    {
      id: 'faq-10',
      question: 'Como vocês protegem meus dados pessoais e privacidade cadastral?',
      answer: 'Seus dados de contato, endereço e histórico de compras são processados de forma estritamente confidencial para faturamento e logística de entrega. Não compartilhamos suas informações com terceiros e utilizamos servidores criptografados seguros para garantir sua total privacidade.'
    }
  ];

  return (
    <section 
      id="faq" 
      className="py-20 md:py-28 bg-[#050a06] relative overflow-hidden"
    >
      {/* Visual background gradient circle */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title Accordion block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase text-primary tracking-widest block mb-3">
            💬 RESPOSTAS RÁPIDAS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Tem alguma dúvida sobre como fazemos as seleções e entregas? Esclareça as principais objeções abaixo. Se precisar de mais informações, chame a gente no WhatsApp!
          </p>
        </div>

        {/* 10 FAQ items list */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`glass-card rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-primary/25 bg-white/[0.05] shadow-[0_0_20px_rgba(34,197,94,0.08)]' 
                    : 'border-white/5 bg-[#050a06]/40 hover:border-white/10'
                }`}
              >
                {/* Trigger Button */}
                <button
                  id={`faq-trigger-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
                    <span className="text-white font-display font-bold text-sm md:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Rotating arrow indicator */}
                  <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary border-primary/25 bg-primary/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Content Panel */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                    {item.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA hook at bottom of FAQ */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Ainda tem alguma dúvida específica? Fale diretamente com o nosso gerente local.
          </p>
          <a
            id="faq-whatsapp-cta"
            href="https://wa.me/5511999990003?text=Quero%20fazer%20meu%20pedido%20de%20compras"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-primary/20 hover:text-primary transition-all cursor-pointer"
          >
            <HelpCircle className="w-4.5 h-4.5" />
            <span>Tirar dúvidas por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
