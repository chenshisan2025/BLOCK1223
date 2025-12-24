import React from 'react';
import { ArrowSquareOut, Ticket, Heart, Fire, Users, Bank } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { TransparencyTx } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';

interface TransactionTableProps {
  transactions: TransparencyTx[];
}

export const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  const { t } = useLanguage();

  const getIcon = (category: string) => {
    switch (category) {
      case 'ticket': return <Ticket weight="fill" className="text-purple-500" />;
      case 'revive': return <Heart weight="fill" className="text-pink-500" />;
      case 'burn': return <Fire weight="fill" className="text-red-500" />;
      case 'referral': return <Users weight="fill" className="text-green-500" />;
      case 'platform': return <Bank weight="fill" className="text-blue-500" />;
      default: return <Ticket weight="fill" className="text-gray-400" />;
    }
  };

  const getLabel = (category: string) => {
    switch (category) {
      case 'ticket': return t('transparency.tx.tabs.leaderboard');
      case 'revive': return t('transparency.tx.tabs.treasure');
      case 'burn': return t('transparency.tx.tabs.burn');
      case 'referral': return t('transparency.tx.tabs.referral');
      case 'platform': return t('transparency.tx.tabs.treasury');
      default: return category;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-xl font-bold text-ink">{t('transparency.tx.title')}</h3>
        <button className="text-sm font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1">
          {t('common.cta.openInExplorer')} <ArrowSquareOut weight="bold" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide">{t('transparency.tx.table.type')}</th>
              <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide">{t('transparency.tx.table.tx')}</th>
              <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide text-right">{t('transparency.tx.table.amount')}</th>
              <th className="px-6 py-4 font-bold text-subtext text-sm uppercase tracking-wide text-right">{t('transparency.tx.table.time')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map((tx, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                      {getIcon(tx.category)}
                    </div>
                    <span className="font-bold text-ink">{getLabel(tx.category)}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a href={`https://etherscan.io/tx/${tx.txHash}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-600 font-mono text-sm hover:underline group">
                    {tx.txHash.substring(0, 6)}...{tx.txHash.substring(tx.txHash.length - 4)}
                    <ArrowSquareOut className="text-xs text-subtext group-hover:text-purple-600" />
                  </a>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className={clsx(
                    "font-mono font-bold",
                    tx.category === 'burn' ? "text-red-500" : "text-ink"
                  )}>
                    {tx.category === 'burn' ? '-' : '+'}{new Intl.NumberFormat().format(tx.amountBWT)}
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-subtext text-sm">
                  {tx.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};