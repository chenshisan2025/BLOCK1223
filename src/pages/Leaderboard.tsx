import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LeaderboardHeader } from '../components/leaderboard/LeaderboardHeader';
import { PrizePoolCard } from '../components/leaderboard/PrizePoolCard';
import { LeaderboardList } from '../components/leaderboard/LeaderboardList';
import { TreasureReferral } from '../components/home/TreasureReferral';
import { LeaderboardEntry } from '../types';
import { getGameParams } from '../constants/economy';

export const Leaderboard: React.FC = () => {
  const { t } = useLanguage();

  const rankers: LeaderboardEntry[] = [
    { rank: 1, userId: 'u1', displayName: 'CryptoKing', score: 2450000, prize: '10,000 BWT', updatedAt: '' },
    { rank: 2, userId: 'u2', displayName: 'BlockMaster', score: 1980500, prize: '5,000 BWT', updatedAt: '' },
    { rank: 3, userId: 'u3', displayName: 'AliceWonder', score: 1500000, prize: '2,500 BWT', updatedAt: '' },
    { rank: 4, userId: 'u4', displayName: 'BobBuilder', score: 1200000, prize: '1,000 BWT', updatedAt: '' },
    { rank: 5, userId: 'u5', displayName: 'Charlie', score: 900000, prize: '500 BWT', updatedAt: '' },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">{t('leaderboard.header.title')}</h1>
          <p className="text-xl text-subtext">{t('leaderboard.header.subtitleTemplate', getGameParams())}</p>
        </div>

        <LeaderboardHeader />
        <PrizePoolCard />
        
        <div className="mb-20">
          <LeaderboardList entries={rankers} />
        </div>

        {/* Invite & Treasure Module */}
        <TreasureReferral />
      </div>

      {/* Sticky My Rank Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-purple-100 p-4 shadow-2xl z-40 animate-slide-up">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold border-2 border-purple-200">
              #1204
            </div>
            <div>
              <p className="font-bold text-ink text-sm">我的排名</p>
              <p className="text-xs text-subtext">还需要 <span className="text-purple-600 font-bold">500</span> 分进入奖金圈</p>
            </div>
          </div>
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full text-sm shadow-lg shadow-purple-200 transition-transform active:scale-95">
            冲榜
          </button>
        </div>
      </div>
    </div>
  );
};
