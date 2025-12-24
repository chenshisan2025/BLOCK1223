import React from 'react';
import { Crown, User, TrendUp } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { LeaderboardEntry } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';

interface LeaderboardListProps {
  entries: LeaderboardEntry[];
}

export const LeaderboardList: React.FC<LeaderboardListProps> = ({ entries }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide">{t('leaderboard.table.columns.rank')}</th>
              <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide">{t('leaderboard.table.columns.player')}</th>
              <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide text-right">{t('leaderboard.table.columns.score')}</th>
              <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide text-right">{t('leaderboard.table.columns.estReward')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {entries.map((player) => (
              <tr 
                key={player.rank} 
                className={clsx(
                  "transition-all hover:scale-[0.99] cursor-pointer",
                  player.rank <= 3 ? "bg-gradient-to-r from-yellow-50/30 to-white" : "hover:bg-purple-50/50"
                )}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {player.rank === 1 && <Crown weight="fill" className="text-yellow-500 text-xl animate-bounce-slow" />}
                    {player.rank === 2 && <Crown weight="fill" className="text-gray-400 text-xl" />}
                    {player.rank === 3 && <Crown weight="fill" className="text-orange-400 text-xl" />}
                    <span className={clsx(
                      "font-bold w-6 text-center", 
                      player.rank <= 3 ? "text-ink text-lg" : "text-subtext"
                    )}>
                      {player.rank > 3 ? `#${player.rank}` : ''}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-2",
                      player.rank === 1 ? "bg-yellow-100 border-yellow-200 text-yellow-600" :
                      player.rank === 2 ? "bg-gray-100 border-gray-200 text-gray-500" :
                      player.rank === 3 ? "bg-orange-100 border-orange-200 text-orange-600" :
                      "bg-white border-gray-100 text-gray-400"
                    )}>
                      {player.avatarUrl ? (
                        <img src={player.avatarUrl} alt={player.displayName} className="w-full h-full rounded-full" />
                      ) : (
                        <User weight="fill" className="text-lg" />
                      )}
                    </div>
                    <span className="font-bold text-ink">{player.displayName}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="font-mono font-bold text-ink text-lg">{new Intl.NumberFormat().format(player.score)}</div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="font-bold text-purple-600">{player.prize}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-gray-100 text-center bg-gray-50/50">
        <p className="text-xs text-subtext font-medium mb-2">
          Top 100 玩家瓜分 50% 奖池，最低可得 50 BWT
        </p>
        <button className="text-sm font-bold text-purple-600 hover:text-purple-700 flex items-center justify-center gap-1 mx-auto transition-transform active:scale-95">
          {t('leaderboard.table.cta')} <TrendUp weight="bold" />
        </button>
      </div>
    </div>
  );
};
