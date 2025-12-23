import React from 'react';
import { Users, ShieldCheck } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';

export const Safety: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="safety" className="max-w-5xl mx-auto px-6 mb-24">
      <div className="bg-purple-50 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{t('safety.title')}</h2>
            <p className="text-subtext mb-8">{t('safety.subtitle')}</p>
            <Button variant="ghost" className="bg-white hover:bg-white/80">
              {t('safety.cta')}
            </Button>
          </div>
          <div className="grid gap-4 w-full md:w-1/2">
            <div className="bg-white p-4 rounded-2xl flex items-start gap-4 shadow-sm hover:translate-y-[-2px] transition-transform">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-xl flex-shrink-0">
                <Users weight="fill" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{t('safety.items.0.title')}</h4>
                <p className="text-xs text-subtext">{t('safety.items.0.body')}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl flex items-start gap-4 shadow-sm hover:translate-y-[-2px] transition-transform">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center text-xl flex-shrink-0">
                <ShieldCheck weight="fill" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{t('safety.items.1.title')}</h4>
                <p className="text-xs text-subtext">{t('safety.items.1.body')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
