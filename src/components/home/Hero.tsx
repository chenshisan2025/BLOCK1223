import React from 'react';
import { PlayCircle, Users, Lightning, StarFour, HandTap, ShieldCheck } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="relative pt-8 pb-12 px-6 max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm mb-6 animate-float">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          <span className="text-xs font-bold text-subtext uppercase tracking-wide">
            {t('home.hero.pill')}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          <span>{t('home.hero.titleLine1')}</span><br />
          <span className="text-gradient relative inline-block">
            <span>{t('home.hero.titleLine2')}</span>
            <StarFour weight="fill" className="absolute -top-4 -right-6 text-yellow-400 text-3xl animate-bounce-slow" />
          </span>
        </h1>
        <p className="text-lg text-subtext mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
          <Button className="w-full sm:w-auto">
            <PlayCircle weight="fill" className="text-2xl" />
            <span>{t('home.hero.cta.primary')}</span>
          </Button>
          <Button 
            variant="ghost" 
            className="w-full sm:w-auto flex items-center justify-center gap-2"
            onClick={() => document.getElementById('aha-demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <PlayCircle weight="fill" />
            <span>{t('home.hero.cta.secondary')}</span>
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex items-center gap-2 text-xs font-bold text-subtext justify-center md:justify-start mb-8">
           <span className="flex items-center gap-1"><Users weight="fill" className="text-purple-500" /> {t('home.hero.badges.1')}</span>
           <span className="w-1 h-1 rounded-full bg-gray-300"></span>
           <span className="flex items-center gap-1"><ShieldCheck weight="fill" className="text-green-500" /> {t('home.hero.badges.2')}</span>
           <span className="w-1 h-1 rounded-full bg-gray-300"></span>
           <span className="flex items-center gap-1"><Lightning weight="fill" className="text-yellow-500" /> {t('home.hero.badges.0')}</span>
        </div>
      </div>

      <div className="w-full md:w-[400px] relative">
        {/* Pool Chips - Floating Elements */}
        <div className="absolute -top-6 -left-12 z-20 animate-bounce-slow hidden md:block">
           <div className="bg-white/90 backdrop-blur-sm shadow-lg border border-yellow-100 rounded-full py-2 px-4 flex items-center gap-2 transform -rotate-6">
              <span className="text-xl">🏆</span>
              <div>
                 <p className="text-[10px] font-bold text-subtext uppercase leading-none">{t('home.arcadeLive.kpi.leaderboardPool')}</p>
                 <p className="text-sm font-black text-ink">25,000 BWT</p>
              </div>
           </div>
        </div>
        <div className="absolute -bottom-6 -right-8 z-20 animate-bounce-slow hidden md:block" style={{ animationDelay: '1.5s' }}>
           <div className="bg-white/90 backdrop-blur-sm shadow-lg border border-purple-100 rounded-full py-2 px-4 flex items-center gap-2 transform rotate-3">
              <span className="text-xl">💎</span>
              <div>
                 <p className="text-[10px] font-bold text-subtext uppercase leading-none">{t('home.arcadeLive.kpi.treasurePool')}</p>
                 <p className="text-sm font-black text-ink">12,500 BWT</p>
              </div>
           </div>
        </div>

        <Card 
          className="p-8 transform transition-transform hover:scale-105 duration-300 group cursor-pointer relative z-10"
          onClick={() => document.getElementById('aha-demo')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-xl flex items-center justify-center text-5xl animate-float border-4 border-white/30">
                🎁
              </div>
              <div className="absolute top-0 right-0 text-2xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                ✨
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{t('home.hero.boxCard.title')}</h3>
            <p className="text-sm text-subtext mb-6 font-medium">{t('home.hero.boxCard.subtitle')}</p>
            <div className="w-full py-3 rounded-full bg-yellow-400 text-purple-900 font-bold shadow-md hover:bg-yellow-300 transition-colors uppercase tracking-wide text-sm flex items-center justify-center gap-2">
              <HandTap weight="fill" /> <span>{t('home.hero.boxCard.cta')}</span>
            </div>
          </div>
        </Card>
      </div>
    </header>
  );
};
