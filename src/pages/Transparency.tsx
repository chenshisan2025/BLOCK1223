import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { CaretDown, CaretUp, ArrowSquareOut } from '@phosphor-icons/react';
import { TransparencyStats } from '../components/transparency/TransparencyStats';
import { TransactionTable } from '../components/transparency/TransactionTable';
import { TransparencyKPI, TransparencyTx } from '../types';

export const Transparency: React.FC = () => {
  const { t } = useLanguage();
  const [showContracts, setShowContracts] = useState(false);

  // Mock data matching TransparencyKPI interface
  const kpiStats: TransparencyKPI = {
    burnTotal: 1250000,
    poolSize: 580400,
    referralTotal: 25600,
    treasuryTotal: 125000,
    lastUpdatedAt: new Date().toISOString()
  };

  // Mock data matching TransparencyTx interface
  const transactions: TransparencyTx[] = [
    { txHash: '0x1234567890abcdef1234567890abcdef12345678', sourceChain: 'Base', category: 'burn', amountBWT: 500, timestamp: '2 mins ago' },
    { txHash: '0xabcdef1234567890abcdef1234567890abcdef12', sourceChain: 'Base', category: 'ticket', amountBWT: 100, timestamp: '5 mins ago' },
    { txHash: '0x7890abcdef1234567890abcdef1234567890ab', sourceChain: 'Base', category: 'referral', amountBWT: 50, timestamp: '8 mins ago' },
    { txHash: '0xdef1234567890abcdef1234567890abcdef123', sourceChain: 'Base', category: 'platform', amountBWT: 50, timestamp: '12 mins ago' },
    { txHash: '0x4567890abcdef1234567890abcdef123456789', sourceChain: 'Base', category: 'ticket', amountBWT: 100, timestamp: '15 mins ago' },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">{t('transparency.header.title')}</h1>
          <p className="text-xl text-subtext">{t('transparency.header.subtitle')}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            {t('transparency.header.statusTemplate', { time: '10:00', network: 'Base' })}
          </div>
        </div>

        {/* New Stats Component */}
        <TransparencyStats stats={kpiStats} />

        {/* Live Token Flow (Enhanced) */}
        <div className="mb-12">
           <div className="bg-black rounded-3xl p-8 shadow-2xl border border-gray-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>
             
             <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                {/* Source */}
                <div className="text-center">
                   <div className="w-24 h-24 rounded-full bg-gray-900 border-2 border-gray-700 flex flex-col items-center justify-center mb-2 shadow-lg shadow-purple-900/20">
                     <span className="text-2xl">👤</span>
                     <span className="text-xs font-bold text-gray-400 mt-1">User</span>
                   </div>
                </div>

                {/* Arrows */}
                <div className="flex-1 flex items-center justify-center relative h-12 w-full md:w-auto">
                   <div className="absolute w-full h-0.5 bg-gray-800"></div>
                   <div className="absolute w-2 h-2 bg-purple-500 rounded-full animate-flow-right shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                   <div className="absolute w-2 h-2 bg-purple-500 rounded-full animate-flow-right delay-75 shadow-[0_0_8px_rgba(168,85,247,0.8)]" style={{animationDelay: '0.5s'}}></div>
                   <div className="absolute w-2 h-2 bg-purple-500 rounded-full animate-flow-right delay-150 shadow-[0_0_8px_rgba(168,85,247,0.8)]" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Distribution */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                   <div className="bg-gray-900 border border-purple-500/30 p-4 rounded-xl text-center animate-pulse-slow">
                     <p className="text-xs text-gray-500 font-bold uppercase mb-1">Pool</p>
                     <p className="text-xl font-bold text-purple-400">50%</p>
                   </div>
                   <div className="bg-gray-900 border border-red-500/30 p-4 rounded-xl text-center animate-pulse-slow" style={{animationDelay: '0.2s'}}>
                     <p className="text-xs text-gray-500 font-bold uppercase mb-1">Burn</p>
                     <p className="text-xl font-bold text-red-400">30%</p>
                   </div>
                   <div className="bg-gray-900 border border-green-500/30 p-4 rounded-xl text-center animate-pulse-slow" style={{animationDelay: '0.4s'}}>
                     <p className="text-xs text-gray-500 font-bold uppercase mb-1">Ref</p>
                     <p className="text-xl font-bold text-green-400">10%</p>
                   </div>
                   <div className="bg-gray-900 border border-blue-500/30 p-4 rounded-xl text-center animate-pulse-slow" style={{animationDelay: '0.6s'}}>
                     <p className="text-xs text-gray-500 font-bold uppercase mb-1">Dev</p>
                     <p className="text-xl font-bold text-blue-400">10%</p>
                   </div>
                </div>
             </div>
           </div>
        </div>

        {/* Transaction Table */}
        <div className="mb-12">
          <TransactionTable transactions={transactions} />
        </div>

        {/* Contracts Accordion */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm mb-12">
          <button 
            onClick={() => setShowContracts(!showContracts)}
            className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-ink">{t('transparency.addresses.title')}</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">{t('common.badge.onChainTransparent')}</span>
            </div>
            {showContracts ? <CaretUp weight="bold" /> : <CaretDown weight="bold" />}
          </button>
          
          {showContracts && (
             <div className="p-6 space-y-4">
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="text-sm font-medium text-subtext">{t('transparency.addresses.rows.treasurePool')}</span>
                 <div className="flex items-center gap-2">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded text-purple-600">0x71C...9A21</code>
                    <ArrowSquareOut className="text-subtext cursor-pointer hover:text-purple-600" />
                 </div>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="text-sm font-medium text-subtext">{t('transparency.addresses.rows.leaderboardPool')}</span>
                 <div className="flex items-center gap-2">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded text-purple-600">0x82D...3B42</code>
                    <ArrowSquareOut className="text-subtext cursor-pointer hover:text-purple-600" />
                 </div>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="text-sm font-medium text-subtext">{t('transparency.addresses.rows.burn')}</span>
                 <div className="flex items-center gap-2">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded text-purple-600">0x93E...4C53</code>
                    <ArrowSquareOut className="text-subtext cursor-pointer hover:text-purple-600" />
                 </div>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="text-sm font-medium text-subtext">{t('transparency.addresses.rows.referral')}</span>
                 <div className="flex items-center gap-2">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded text-purple-600">0xABC...DEF1</code>
                    <ArrowSquareOut className="text-subtext cursor-pointer hover:text-purple-600" />
                 </div>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="text-sm font-medium text-subtext">{t('transparency.addresses.rows.treasury')}</span>
                 <div className="flex items-center gap-2">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded text-purple-600">0x123...4567</code>
                    <ArrowSquareOut className="text-subtext cursor-pointer hover:text-purple-600" />
                 </div>
               </div>
             </div>
          )}
        </div>

        {/* Verify How */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-ink mb-6">{t('transparency.verifyHow.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-purple-600 font-bold text-lg mb-2">01</div>
              <p className="text-subtext text-sm">{t('transparency.verifyHow.steps.0')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-purple-600 font-bold text-lg mb-2">02</div>
              <p className="text-subtext text-sm">{t('transparency.verifyHow.steps.1')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-purple-600 font-bold text-lg mb-2">03</div>
              <p className="text-subtext text-sm">{t('transparency.verifyHow.steps.2')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};