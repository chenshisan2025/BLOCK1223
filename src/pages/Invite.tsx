import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Users, Copy, ShareNetwork, ArrowRight, ShieldCheck, TwitterLogo, TelegramLogo } from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import { getGameParams } from '../constants/economy';

export const Invite: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">{t('invite.header.title')}</h1>
          <p className="text-xl text-subtext">{t('invite.header.subtitleTemplate', getGameParams())}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Stats Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-50">
            <h3 className="text-xl font-bold text-ink mb-6 flex items-center gap-2">
              <Users weight="fill" className="text-purple-600" />
              {t('invite.stats.title')}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-2xl p-4">
                <p className="text-sm text-subtext mb-1">{t('invite.stats.metrics.invites')}</p>
                <p className="text-2xl font-bold text-ink">12</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-4">
                <p className="text-sm text-subtext mb-1">{t('invite.stats.metrics.claimable')}</p>
                <p className="text-2xl font-bold text-green-600">450 BWT</p>
              </div>
              <div className="col-span-2 bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-subtext mb-1">{t('invite.stats.metrics.lifetime')}</p>
                  <p className="text-2xl font-bold text-ink">1,250 BWT</p>
                </div>
                <Button variant="candy" className="px-6">
                  {t('invite.stats.cta.withdraw')}
                </Button>
              </div>
            </div>
          </div>

          {/* Share Card */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('invite.share.title')}</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 flex items-center justify-between border border-white/20">
                <code className="font-mono text-sm">blockworld.com/ref/yanshi</code>
                <div className="flex items-center gap-2">
                   <button className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white" title="Share to Twitter">
                     <TwitterLogo weight="fill" className="text-lg" />
                   </button>
                   <button className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white" title="Share to Telegram">
                     <TelegramLogo weight="fill" className="text-lg" />
                   </button>
                   <div className="w-px h-4 bg-white/20 mx-1"></div>
                   <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                     <Copy weight="bold" />
                   </button>
                </div>
              </div>
              <p className="text-purple-100 text-sm mb-6">{t('invite.share.subtitle')}</p>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-white text-purple-600 font-bold py-3 rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                <ShareNetwork weight="bold" />
                {t('invite.share.cta.share')}
              </button>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="w-8 h-8 bg-black/10 rounded-sm grid grid-cols-3 grid-rows-3 gap-0.5 p-0.5">
                   <div className="bg-black/80 col-span-1 row-span-1 rounded-[1px]"></div>
                   <div className="bg-black/80 col-span-1 row-span-1 rounded-[1px] col-start-3"></div>
                   <div className="bg-black/80 col-span-1 row-span-1 rounded-[1px] row-start-3"></div>
                   <div className="bg-black/80 col-span-1 row-span-1 rounded-[1px] col-start-2 row-start-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rules Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12">
          <h3 className="text-xl font-bold text-ink mb-6">{t('invite.rules.title')}</h3>
          <ul className="list-disc list-inside space-y-2 text-subtext">
            <li>{t('invite.rules.items.0')}</li>
            <li>{t('invite.rules.items.1')}</li>
            <li>{t('invite.rules.items.2')}</li>
          </ul>
        </div>

        {/* Verification Link */}
        <div className="text-center">
           <a href="/transparency" className="inline-flex items-center gap-2 text-subtext hover:text-purple-600 font-medium transition-colors">
             <ShieldCheck weight="fill" />
             {t('invite.onChain.cta')}
             <ArrowRight weight="bold" />
           </a>
        </div>
      </div>
    </div>
  );
};
