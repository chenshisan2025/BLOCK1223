import React from 'react';
import { SignIn, GameController, Gift } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';
import { Card } from '../ui/Card';

export const Steps: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">{t('steps.title')}</h2>
        <p className="text-subtext">{t('steps.subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 -z-10 rounded-full"></div>
        
        <Card className="p-8 text-center group bg-white">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-500 rounded-3xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform shadow-sm border border-blue-200/50 rotate-[-3deg]">
            <SignIn weight="fill" />
          </div>
          <h3 className="text-xl font-bold mb-3">{t('steps.s1Title')}</h3>
          <p className="text-sm text-subtext">{t('steps.s1Body')}</p>
        </Card>

        <Card className="p-8 text-center group bg-white md:-top-4 relative">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 text-purple-500 rounded-3xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform shadow-sm border border-purple-200/50 rotate-[2deg]">
            <GameController weight="fill" />
          </div>
          <h3 className="text-xl font-bold mb-3">{t('steps.s2Title')}</h3>
          <p className="text-sm text-subtext">{t('steps.s2Body')}</p>
        </Card>

        <Card className="p-8 text-center group bg-white">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 text-orange-500 rounded-3xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform shadow-sm border border-orange-200/50 rotate-[-2deg]">
            <Gift weight="fill" />
          </div>
          <h3 className="text-xl font-bold mb-3">{t('steps.s3Title')}</h3>
          <p className="text-sm text-subtext">{t('steps.s3Body')}</p>
        </Card>
      </div>
    </section>
  );
};
