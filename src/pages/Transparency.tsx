import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Fire, TreasureChest, Users, Bank, CaretDown, CaretUp, ArrowRight } from '@phosphor-icons/react';
import { clsx } from 'clsx';

export const Transparency: React.FC = () => {
  const { t } = useLanguage();
  const [showContracts, setShowContracts] = useState(false);

  // Mock data for feed
  const feed = [
    { type: 'burn', amount: '500 BWT', time: '2 mins ago', hash: '0x12...34' },
    { type: 'pool', amount: '100 BWT', time: '5 mins ago', hash: '0x56...78' },
    { type: 'referral', amount: '50 BWT', time: '8 mins ago', hash: '0x90...AB' },
    { type: 'treasury', amount: '50 BWT', time: '12 mins ago', hash: '0xCD...EF' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'burn': return <Fire weight="fill" className="text-orange-500" />;
      case 'pool': return <TreasureChest weight="fill" className="text-purple-500" />;
      case 'referral': return <Users weight="fill" className="text-blue-500" />;
      case 'treasury': return <Bank weight="fill" className="text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">{t('transparency.title')}</h1>
          <p className="text-xl text-subtext">{t('transparency.subtitle')}</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 text-center">
            <Fire weight="fill" className="text-3xl text-orange-500 mx-auto mb-2" />
            <p className="text-sm text-subtext mb-1">{t('transparency.cards.burn')}</p>
            <p className="text-xl font-bold text-ink">1,250,000</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
            <TreasureChest weight="fill" className="text-3xl text-purple-500 mx-auto mb-2" />
            <p className="text-sm text-subtext mb-1">{t('transparency.cards.pool')}</p>
            <p className="text-xl font-bold text-ink">580,400</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
            <Users weight="fill" className="text-3xl text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-subtext mb-1">{t('transparency.cards.referral')}</p>
            <p className="text-xl font-bold text-ink">25,600</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 text-center">
            <Bank weight="fill" className="text-3xl text-green-500 mx-auto mb-2" />
            <p className="text-sm text-subtext mb-1">{t('transparency.cards.treasury')}</p>
            <p className="text-xl font-bold text-ink">125,000</p>
          </div>
        </div>

        {/* Flow Chart (Simplified Visual) */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12 relative overflow-hidden">
          <h3 className="text-xl font-bold text-ink mb-8 text-center">Live Token Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="bg-gray-100 rounded-xl p-4 text-center w-full md:w-32">
              <p className="font-bold text-gray-600">User Spend</p>
              <p className="text-xs text-gray-400">Tickets / Revives</p>
            </div>
            <ArrowRight weight="bold" className="text-gray-300 text-2xl rotate-90 md:rotate-0" />
            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-2">
               <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg text-center">
                 <p className="font-bold text-orange-600">30% Burn</p>
               </div>
               <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg text-center">
                 <p className="font-bold text-purple-600">50% Pool</p>
               </div>
               <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-center">
                 <p className="font-bold text-blue-600">10% Ref</p>
               </div>
               <div className="bg-green-50 border border-green-200 p-3 rounded-lg text-center">
                 <p className="font-bold text-green-600">10% Dev</p>
               </div>
            </div>
          </div>
        </div>

        {/* Transaction Feed */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
          <h3 className="text-xl font-bold text-ink mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            {feed.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <p className="font-bold text-ink capitalize">{item.type}</p>
                    <p className="text-xs text-subtext">{item.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-ink">{item.amount}</p>
                  <a href="#" className="text-xs text-purple-500 hover:text-purple-700 font-mono">{item.hash}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contracts Accordion */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <button 
            onClick={() => setShowContracts(!showContracts)}
            className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-bold text-ink">Smart Contracts</span>
            {showContracts ? <CaretUp weight="bold" /> : <CaretDown weight="bold" />}
          </button>
          
          {showContracts && (
             <div className="p-6 space-y-4">
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="text-sm font-medium text-subtext">Token Contract (BWT)</span>
                 <code className="text-xs bg-gray-100 px-2 py-1 rounded text-purple-600">0x71C...9A21</code>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="text-sm font-medium text-subtext">Game Logic</span>
                 <code className="text-xs bg-gray-100 px-2 py-1 rounded text-purple-600">0x82D...3B42</code>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="text-sm font-medium text-subtext">Treasury</span>
                 <code className="text-xs bg-gray-100 px-2 py-1 rounded text-purple-600">0x93E...4C53</code>
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
