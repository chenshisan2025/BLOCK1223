import React from 'react';
import { Timer, Scroll, UserCircle } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';

export const LeaderboardHeader: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8 gap-4">
      <div className="flex items-center gap-2 text-ink font-bold">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        {t('common.label.live')} · {t('leaderboard.header.title')}
      </div>
      
      <div className="flex items-center gap-6 text-sm text-subtext">
        <div className="flex items-center gap-1.5">
          <Timer weight="bold" className="text-purple-500" />
          <span className="font-mono font-medium">{t('leaderboard.header.endsInTemplate', { time: '05:21:33' })}</span>
        </div>
        <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors">
          <Scroll weight="bold" />
          {t('nav.help')}
        </button>
      </div>

      <div className="flex items-center gap-3 pl-4 md:border-l border-gray-100">
        <UserCircle weight="fill" className="text-2xl text-gray-300" />
        <div className="text-xs">
          <p className="text-subtext">{t('leaderboard.table.columns.rank')}: <span className="font-bold text-ink">--</span></p>
          <p className="text-subtext">{t('leaderboard.table.columns.score')}: <span className="font-bold text-ink">--</span></p>
        </div>
      </div>
    </div>
  );
};
