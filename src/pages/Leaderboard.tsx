import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Trophy, Crown, User, TrendUp, Info } from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import { clsx } from 'clsx';

export const Leaderboard: React.FC = () => {
  const { t } = useLanguage();

  const rankers = [
    { rank: 1, name: 'CryptoKing', score: '2,450,000', prize: '10,000 BWT' },
    { rank: 2, name: 'BlockMaster', score: '1,980,500', prize: '5,000 BWT' },
    { rank: 3, name: 'AliceWonder', score: '1,500,000', prize: '2,500 BWT' },
    { rank: 4, name: 'BobBuilder', score: '1,200,000', prize: '1,000 BWT' },
    { rank: 5, name: 'Charlie', score: '900,000', prize: '500 BWT' },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">{t('leaderboard.title')}</h1>
          <p className="text-xl text-subtext">{t('leaderboard.subtitle')}</p>
        </div>

        {/* Prize Pool Card */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-xl text-white mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Trophy weight="fill" className="text-4xl text-yellow-100" />
                <h2 className="text-3xl font-bold">{t('leaderboardPool.title')}</h2>
              </div>
              <p className="text-yellow-100 text-lg mb-6 max-w-lg">{t('leaderboardPool.subtitle')}</p>
              <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg text-sm font-medium">
                <Info weight="fill" /> {t('leaderboardPool.rule')}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[200px]">
              <p className="text-sm font-bold text-yellow-100 uppercase tracking-wide mb-1">Current Pool</p>
              <p className="text-4xl font-black">25,000</p>
              <p className="text-sm font-bold">BWT</p>
              <Button variant="candy" className="mt-4 w-full bg-white text-orange-600 hover:bg-gray-50">
                {t('leaderboardPool.cta')}
              </Button>
            </div>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide">Rank</th>
                  <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide">Player</th>
                  <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide text-right">Score</th>
                  <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide text-right">Est. Prize</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rankers.map((player) => (
                  <tr key={player.rank} className="hover:bg-purple-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {player.rank === 1 && <Crown weight="fill" className="text-yellow-500 text-xl" />}
                        {player.rank === 2 && <Crown weight="fill" className="text-gray-400 text-xl" />}
                        {player.rank === 3 && <Crown weight="fill" className="text-orange-400 text-xl" />}
                        <span className={clsx("font-bold", player.rank <= 3 ? "text-ink" : "text-subtext")}>
                          #{player.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                          <User weight="fill" />
                        </div>
                        <span className="font-bold text-ink">{player.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="font-mono font-medium text-ink">{player.score}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="font-bold text-purple-600">{player.prize}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100 text-center">
            <button className="text-sm font-bold text-purple-600 hover:text-purple-700 flex items-center justify-center gap-1 mx-auto">
              View Top 100 <TrendUp weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
