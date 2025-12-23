import React from 'react';
import { Sparkle, TreasureChest, Trophy, Timer } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';

const dropItems = [
  { icon: "💰", label: "500 USDT", sub: "Prize Pool" },
  { icon: "💎", label: "Rare Badge", sub: "Limited" },
  { icon: "🎁", label: "Mystery Box", sub: "Partner Drop" },
  { icon: "⚡️", label: "2x BWT", sub: "Event" },
  { icon: "🔥", label: "1 BNB", sub: "Jackpot" },
  { icon: "🎟️", label: "Season Pass", sub: "Ticket" }
];

export const Drops: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 mb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-3xl -z-10 opacity-60 blur-xl"></div>
      <Card className="p-1 flex flex-col md:flex-row items-center gap-6 overflow-hidden bg-white/50 backdrop-blur-sm border-white/40 mb-6">
        {/* Header */}
        <div className="flex-shrink-0 px-6 py-4 md:border-r border-purple-100 min-w-[200px] text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <Sparkle weight="fill" className="text-yellow-500 text-lg" />
            <h3 className="font-bold text-ink">{t('drops.title')}</h3>
          </div>
          <p className="text-xs text-subtext">{t('drops.subtitle')}</p>
        </div>
        
        {/* Marquee Container */}
        <div className="flex-1 w-full overflow-hidden marquee-container relative mask-gradient">
          <div className="flex gap-4 animate-marquee w-max py-4 hover:[animation-play-state:paused]">
            {[...dropItems, ...dropItems].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white border border-purple-100 rounded-full pl-2 pr-4 py-1.5 shadow-sm min-w-[140px]">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-lg">{item.icon}</div>
                <div>
                  <div className="text-xs font-bold text-ink">{item.label}</div>
                  <div className="text-[10px] text-purple-500 font-bold uppercase tracking-wider">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block pr-6 pl-2">
          <Link to="/rewards" className="text-sm font-bold text-purple-600 hover:text-purple-700 whitespace-nowrap">
            {t('drops.cta')} →
          </Link>
        </div>
      </Card>

      {/* Pool Chips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Treasure Pool Chip */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-purple-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              <TreasureChest weight="fill" className="text-2xl" />
            </div>
            <div>
              <p className="text-xs font-bold text-subtext uppercase tracking-wide">{t('chips.treasurePool')}</p>
              <p className="text-xl font-black text-ink">580,400 <span className="text-sm font-bold text-purple-500">BWT</span></p>
            </div>
          </div>
          <div className="text-right">
             <div className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-xs font-mono font-bold text-subtext">
               <Timer weight="bold" /> 01:23:45
             </div>
          </div>
        </div>

        {/* Leaderboard Pool Chip */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-yellow-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
              <Trophy weight="fill" className="text-2xl" />
            </div>
            <div>
              <p className="text-xs font-bold text-subtext uppercase tracking-wide">{t('chips.leaderboardPool')}</p>
              <p className="text-xl font-black text-ink">25,000 <span className="text-sm font-bold text-yellow-500">BWT</span></p>
            </div>
          </div>
          <Link to="/leaderboard" className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold rounded-lg text-sm transition-colors shadow-sm">
            {t('chips.playEndless')}
          </Link>
        </div>
      </div>
    </section>
  );
};
