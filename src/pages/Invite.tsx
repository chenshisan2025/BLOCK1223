import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Users, Copy, ShareNetwork, ArrowRight, ShieldCheck } from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';

export const Invite: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">{t('invite.title')}</h1>
          <p className="text-xl text-subtext">{t('invite.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Stats Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-50">
            <h3 className="text-xl font-bold text-ink mb-6 flex items-center gap-2">
              <Users weight="fill" className="text-purple-600" />
              My Stats
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-2xl p-4">
                <p className="text-sm text-subtext mb-1">{t('invite.stats.invited')}</p>
                <p className="text-2xl font-bold text-ink">12</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-4">
                <p className="text-sm text-subtext mb-1">{t('invite.stats.earned')}</p>
                <p className="text-2xl font-bold text-green-600">450 BWT</p>
              </div>
              <div className="col-span-2 bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-subtext mb-1">{t('invite.stats.total')}</p>
                  <p className="text-2xl font-bold text-ink">1,250 BWT</p>
                </div>
                <Button variant="candy" className="px-6">
                  {t('withdraw.title')}
                </Button>
              </div>
            </div>
          </div>

          {/* Share Card */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('invite.cta')}</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 flex items-center justify-between border border-white/20">
                <code className="font-mono text-sm">blockworld.com/ref/yanshi</code>
                <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                  <Copy weight="bold" />
                </button>
              </div>
              <p className="text-purple-100 text-sm mb-6">{t('invite.note')}</p>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-white text-purple-600 font-bold py-3 rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                <ShareNetwork weight="bold" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Verification Link */}
        <div className="text-center">
           <a href="/transparency" className="inline-flex items-center gap-2 text-subtext hover:text-purple-600 font-medium transition-colors">
             <ShieldCheck weight="fill" />
             View on-chain payouts
             <ArrowRight weight="bold" />
           </a>
        </div>
      </div>
    </div>
  );
};
