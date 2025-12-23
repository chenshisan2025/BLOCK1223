import React from 'react';
import { PlayCircle, VideoCamera, CheckCircle, Users, Lightning, StarFour, HandTap, ShieldCheck, Timer } from '@phosphor-icons/react';
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
            {t('hero.pill')}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          <span>{t('hero.title1')}</span><br />
          <span className="text-gradient relative inline-block">
            <span>{t('hero.title2')}</span>
            <StarFour weight="fill" className="absolute -top-4 -right-6 text-yellow-400 text-3xl animate-bounce-slow" />
          </span>
        </h1>
        <p className="text-lg text-subtext mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
          <Button className="w-full sm:w-auto">
            <PlayCircle weight="fill" className="text-2xl" />
            <span>{t('hero.ctaPlay')}</span>
          </Button>
          <Link to="/invite" className="w-full sm:w-auto">
            <Button variant="ghost" className="w-full flex items-center justify-center gap-2">
              <Users weight="fill" />
              <span>{t('hero.ctaInvite')}</span>
            </Button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 opacity-90">
          <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100 flex items-center gap-1">
            <Users weight="fill" /> <span>{t('hero.badges.referral10')}</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100 flex items-center gap-1">
            <Timer weight="fill" /> <span>{t('hero.badges.chestDraw')}</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 flex items-center gap-1">
            <ShieldCheck weight="fill" /> <span>{t('hero.badges.onchain')}</span>
          </span>
        </div>
      </div>

      <div className="w-full md:w-[400px]">
        <Card 
          className="p-8 transform transition-transform hover:scale-105 duration-300 group cursor-pointer"
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
            <h3 className="text-2xl font-bold mb-2">{t('hero.box.title')}</h3>
            <p className="text-sm text-subtext mb-6 font-medium">{t('hero.box.sub')}</p>
            <div className="w-full py-3 rounded-full bg-yellow-400 text-purple-900 font-bold shadow-md hover:bg-yellow-300 transition-colors uppercase tracking-wide text-sm flex items-center justify-center gap-2">
              <HandTap weight="fill" /> <span>{t('hero.box.cta')}</span>
            </div>
          </div>
        </Card>
      </div>
    </header>
  );
};
