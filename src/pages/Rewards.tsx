import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Lock, CheckCircle, ArrowRight, Gift, Coins, Star, Fire } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { getGameParams } from '../constants/economy';

export const Rewards: React.FC = () => {
  const { t } = useLanguage();

  const levels = [
    { level: 1, reward: '10 BWT', status: 'claimed' },
    { level: 2, reward: 'Mystery Box', status: 'current' },
    { level: 3, reward: '50 BWT', status: 'locked' },
    { level: 4, reward: 'Rare Skin', status: 'locked' },
    { level: 5, reward: '100 USDT', status: 'locked' },
  ];

  const SplitBar = ({ label, splits }: { label: string, splits: { width: string, color: string, text: string }[] }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-bold text-ink text-sm">{label}</span>
      </div>
      <div className="h-8 rounded-full flex overflow-hidden shadow-inner">
        {splits.map((split, i) => (
          <div 
            key={i} 
            className={`${split.color} flex items-center justify-center text-[10px] font-bold text-white whitespace-nowrap px-2 transition-all hover:opacity-90 relative group`} 
            style={{ width: split.width }}
          >
            {split.text}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">{t('rewards.header.title')}</h1>
          <p className="text-xl text-subtext">{t('rewards.header.subtitle')}</p>
          <div className="flex justify-center gap-4 mt-6">
             <Link to="/play">
               <Button variant="candy">{t('rewards.header.cta.play')}</Button>
             </Link>
             <Link to="/transparency">
               <Button variant="ghost">{t('rewards.header.cta.verify')}</Button>
             </Link>
          </div>
        </div>

        {/* Reward Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card variant="flat" className="bg-purple-50 border-purple-100">
             <Coins weight="fill" className="text-3xl text-purple-600 mb-3" />
             <h3 className="font-bold text-ink mb-1">{t('rewards.types.cards.0.title')}</h3>
             <p className="text-xs text-subtext">{t('rewards.types.cards.0.body')}</p>
          </Card>
          <Card variant="flat" className="bg-green-50 border-green-100">
             <Gift weight="fill" className="text-3xl text-green-600 mb-3" />
             <h3 className="font-bold text-ink mb-1">{t('rewards.types.cards.1.title')}</h3>
             <p className="text-xs text-subtext">{t('rewards.types.cards.1.body')}</p>
          </Card>
          <Card variant="flat" className="bg-blue-50 border-blue-100">
             <Star weight="fill" className="text-3xl text-blue-600 mb-3" />
             <h3 className="font-bold text-ink mb-1">{t('rewards.types.cards.2.title')}</h3>
             <p className="text-xs text-subtext">{t('rewards.types.cards.2.body')}</p>
          </Card>
        </div>

        {/* Level Rewards (Progress) */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-50 mb-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-ink mb-1">{t('rewards.progress.title')}</h3>
            <p className="text-subtext mb-4">{t('rewards.progress.subtitle')}</p>
            
            {/* XP Progress Bar */}
            <div className="bg-gray-100 rounded-full h-4 overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[40%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                Current XP: 400 / 1000
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {levels.map((item, index) => (
              <div 
                key={index}
                className={clsx(
                  "relative flex items-center p-6 rounded-2xl border-2 transition-all",
                  item.status === 'claimed' ? "bg-green-50 border-green-200" :
                  item.status === 'current' ? "bg-white border-purple-500 shadow-md scale-[1.02]" :
                  "bg-gray-50 border-gray-100 opacity-70"
                )}
              >
                {/* Lock Overlay for locked items */}
                {item.status === 'locked' && (
                   <div className="absolute top-2 right-2 text-gray-300">
                     <Lock weight="fill" className="text-lg" />
                   </div>
                )}
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 bg-white shadow-sm">
                  {item.status === 'claimed' ? (
                    <CheckCircle weight="fill" className="text-green-500 text-2xl" />
                  ) : item.status === 'locked' ? (
                    <Lock weight="fill" className="text-gray-300 text-2xl" />
                  ) : (
                    <span className="text-purple-600">{item.level}</span>
                  )}
                </div>
                
                <div className="flex-grow">
                  <h3 className={clsx(
                    "text-lg font-bold",
                    item.status === 'locked' ? "text-gray-400" : "text-ink"
                  )}>
                    Level {item.level}
                  </h3>
                  <p className={clsx(
                    "text-sm font-medium",
                    item.status === 'locked' ? "text-gray-400" : "text-purple-600"
                  )}>
                    {item.reward}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  {item.status === 'current' && (
                    <button className="px-6 py-2 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
                      {t('rewards.progress.status.claim')}
                    </button>
                  )}
                  {item.status === 'claimed' && (
                    <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                      {t('rewards.progress.status.claimed')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-subtext mt-6 text-center">{t('rewards.progress.note')}</p>
        </div>

        {/* Pools & Splits */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-50 mb-12">
          <h3 className="text-2xl font-bold text-ink mb-2">{t('rewards.splits.title')}</h3>
          <p className="text-subtext mb-8">{t('rewards.splits.subtitle')}</p>
          
          <SplitBar 
            label={t('rewards.splits.rows.revive.titleTemplate', getGameParams())}
            splits={[
              { width: '50%', color: 'bg-purple-500', text: '50% Pool' },
              { width: '30%', color: 'bg-orange-500', text: '30% Burn' },
              { width: '10%', color: 'bg-blue-500', text: '10% Ref' },
              { width: '10%', color: 'bg-green-500', text: '10% Dev' },
            ]} 
          />
          <p className="text-xs text-subtext mb-6 -mt-4">{t('rewards.splits.rows.revive.lineTemplate', getGameParams())}</p>
          
          <SplitBar 
            label={t('rewards.splits.rows.ticket.titleTemplate', getGameParams())}
            splits={[
              { width: '50%', color: 'bg-yellow-500', text: '50% Pool' },
              { width: '30%', color: 'bg-orange-500', text: '30% Burn' },
              { width: '10%', color: 'bg-blue-500', text: '10% Ref' },
              { width: '10%', color: 'bg-green-500', text: '10% Dev' },
            ]} 
          />
          <p className="text-xs text-subtext mb-6 -mt-4">{t('rewards.splits.rows.ticket.lineTemplate', getGameParams())}</p>

          <Link to="/transparency" className="inline-flex items-center gap-1 text-sm font-bold text-purple-600 hover:text-purple-700">
             {t('rewards.splits.cta')} <ArrowRight weight="bold" />
          </Link>
        </div>

        {/* Reward Release */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-50 mb-12">
           <h3 className="text-2xl font-bold text-ink mb-2">{t('rewards.rewardRelease.title')}</h3>
           <p className="text-subtext mb-6">{t('rewards.rewardRelease.subtitle')}</p>
           <ul className="space-y-3 text-sm text-subtext">
             <li className="flex items-start gap-2">
               <CheckCircle weight="fill" className="text-green-500 text-lg flex-shrink-0 mt-0.5" />
               {t('rewards.rewardRelease.smallInstant')}
             </li>
             <li className="flex items-start gap-2">
               <CheckCircle weight="fill" className="text-blue-500 text-lg flex-shrink-0 mt-0.5" />
               {t('rewards.rewardRelease.largeLinearTemplate', getGameParams())}
             </li>
             <li className="flex items-start gap-2">
               <Fire weight="fill" className="text-orange-500 text-lg flex-shrink-0 mt-0.5" />
               {t('rewards.rewardRelease.choiceTemplate', getGameParams())}
             </li>
           </ul>
        </div>

        {/* Sponsor Box */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t('rewards.sponsorBox.title')}</h3>
              <p className="text-gray-400 mb-2">{t('rewards.sponsorBox.p1')}</p>
              <p className="text-gray-400 mb-6">{t('rewards.sponsorBox.p2')}</p>
              <p className="text-xs text-gray-500">{t('rewards.sponsorBox.simulatedNote')}</p>
            </div>
            <Link to="/play">
              <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border-white/20 whitespace-nowrap">
                {t('rewards.sponsorBox.cta')} <Gift weight="bold" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
