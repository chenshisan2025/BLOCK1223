import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Confetti } from '@phosphor-icons/react';

export const Events: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl text-purple-600">
          <Confetti weight="fill" />
        </div>
        <h1 className="text-3xl font-bold text-ink mb-4">{t('events.title')}</h1>
        <p className="text-xl text-subtext">{t('events.subtitle')}</p>
      </div>
    </div>
  );
};
