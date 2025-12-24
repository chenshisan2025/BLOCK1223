import React from 'react';
import { Fire, Trophy, Bank, TrendUp } from '@phosphor-icons/react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../hooks/useLanguage';
import { TransparencyKPI } from '../../types';

interface TransparencyStatsProps {
  stats: TransparencyKPI;
}

export const TransparencyStats: React.FC<TransparencyStatsProps> = ({ stats }) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card variant="juicy" className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-none">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
            <Trophy weight="fill" className="text-3xl text-white" />
          </div>
          <div>
            <div className="text-yellow-100 font-bold text-sm uppercase tracking-wide">{t('transparency.kpi.leaderboardPool')}</div>
            <div className="text-3xl font-black">{new Intl.NumberFormat().format(stats.poolSize)} BWT</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-sm font-medium text-yellow-50">
          <span>Community Prize</span>
          <TrendUp weight="bold" />
        </div>
      </Card>

      <Card variant="flat" className="bg-red-50 border-red-100">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-red-100 rounded-2xl">
            <Fire weight="fill" className="text-3xl text-red-500" />
          </div>
          <div>
            <div className="text-red-400 font-bold text-sm uppercase tracking-wide">{t('transparency.kpi.totalBurned')}</div>
            <div className="text-3xl font-black text-ink">{new Intl.NumberFormat().format(stats.burnTotal)} BWT</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-red-100 flex justify-between items-center text-sm font-medium text-red-400">
          <span>Deflationary Burn</span>
          <span>🔥</span>
        </div>
      </Card>

      <Card variant="flat" className="bg-blue-50 border-blue-100">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-blue-100 rounded-2xl">
            <Bank weight="fill" className="text-3xl text-blue-500" />
          </div>
          <div>
            <div className="text-blue-400 font-bold text-sm uppercase tracking-wide">{t('transparency.kpi.treasuryToday')}</div>
            <div className="text-3xl font-black text-ink">{new Intl.NumberFormat().format(stats.treasuryTotal)} BWT</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-blue-100 flex justify-between items-center text-sm font-medium text-blue-400">
          <span>Platform Revenue</span>
          <span>🏛️</span>
        </div>
      </Card>
    </div>
  );
};