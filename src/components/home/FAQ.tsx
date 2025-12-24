import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { AccordionItem } from '../ui/Accordion';

const faqKeys = [0, 1, 2, 3, 4, 5, 6];

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 mb-32">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-2">{t('home.faq.title')}</h2>
        <p className="text-subtext text-sm">{t('home.faq.subtitle')}</p>
      </div>
      
      <div className="space-y-4">
        {faqKeys.map((key) => (
          <AccordionItem 
            key={key} 
            title={t(`home.faq.items.${key}.q`)}
          >
            {t(`home.faq.items.${key}.a`)}
          </AccordionItem>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a href="#" className="text-sm font-bold text-purple-600 hover:text-purple-800">
          {t('home.faq.cta')} →
        </a>
      </div>
    </section>
  );
};
