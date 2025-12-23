import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Users, TreasureChest, Copy, ArrowRight, Timer } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const TreasureReferral: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-ink mb-4">{t('aha.treasureReferral')}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Invite Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-50 relative overflow-hidden group hover:border-blue-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Users weight="fill" className="text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-ink mb-2">{t('invite.title')}</h3>
            <p className="text-subtext mb-6">{t('invite.subtitle')}</p>
            
            <div className="flex flex-col gap-4">
               <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-100">
                 <code className="text-sm font-mono text-gray-500">blockworld.com/ref/...</code>
                 <Button variant="ghost" className="h-8 px-3 text-xs">
                   <Copy weight="bold" />
                 </Button>
               </div>
               <Link to="/invite">
                 <Button variant="candy" className="w-full flex items-center justify-center gap-2">
                   {t('invite.cta')} <ArrowRight weight="bold" />
                 </Button>
               </Link>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">{t('invite.note')}</p>
          </div>
        </div>

        {/* Treasure Chest Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-50 relative overflow-hidden group hover:border-purple-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <TreasureChest weight="fill" className="text-2xl" />
            </div>
            
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-ink">{t('treasure.title')}</h3>
              <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Timer weight="fill" /> 01:23:45
              </div>
            </div>
            
            <p className="text-subtext mb-6">{t('treasure.subtitle').replace('{{countdown}}', '')}</p>
            
            <div className="flex flex-col gap-4">
               <div className="bg-purple-50 rounded-xl p-4 border border-purple-100 text-center">
                 <p className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-1">{t('chips.treasurePool')}</p>
                 <p className="text-2xl font-black text-purple-600">580,400 BWT</p>
               </div>
               <div className="flex gap-3">
                 <Button variant="ghost" className="flex-1 text-sm">
                   {t('treasure.winners')}
                 </Button>
                 <Link to="/rewards" className="flex-1">
                   <Button variant="candy" className="w-full text-sm">
                     {t('treasure.cta')}
                   </Button>
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
