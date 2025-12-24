import React from 'react';
import { Trophy, Info } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import { PoolSplitBar } from './PoolSplitBar';
import { useLanguage } from '../../hooks/useLanguage';
import { ECONOMY, getGameParams } from '../../constants/economy';

export const PrizePoolCard: React.FC = () => {
  const { t } = useLanguage();

  const ticketSplits = [
    { width: `${ECONOMY.SPLITS.TICKET.POOL}%`, color: 'bg-purple-500', text: `${ECONOMY.SPLITS.TICKET.POOL}% Pool` },
    { width: `${ECONOMY.SPLITS.TICKET.BURN}%`, color: 'bg-orange-500', text: `${ECONOMY.SPLITS.TICKET.BURN}% Burn` },
    { width: `${ECONOMY.SPLITS.TICKET.REFERRER}%`, color: 'bg-blue-500', text: `${ECONOMY.SPLITS.TICKET.REFERRER}% Ref` },
    { width: `${ECONOMY.SPLITS.TICKET.PLATFORM}%`, color: 'bg-green-500', text: `${ECONOMY.SPLITS.TICKET.PLATFORM}% Dev` },
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-xl text-white mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left flex-1">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <Trophy weight="fill" className="text-4xl text-yellow-100" />
            <h2 className="text-3xl font-bold">{t('leaderboard.pool.title')}</h2>
          </div>
          <p className="text-yellow-100 text-lg mb-6 max-w-lg">{t('leaderboard.pool.splitLineTemplate', getGameParams())}</p>
          
          <PoolSplitBar label="Ticket Distribution" splits={ticketSplits} />
          
          <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg text-sm font-medium">
            <Info weight="fill" /> {t('common.label.learn')}
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[200px]">
          <p className="text-sm font-bold text-yellow-100 uppercase tracking-wide mb-1">{t('terms.pool')}</p>
          <p className="text-4xl font-black">25,000</p>
          <p className="text-sm font-bold">BWT</p>
          <Button variant="candy" className="mt-4 w-full bg-white text-orange-600 hover:bg-gray-50 border-none shadow-lg">
            {t('leaderboard.pool.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
};
