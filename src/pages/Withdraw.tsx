import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Wallet, CurrencyDollar, CreditCard, ShieldCheck, ArrowRight, Info } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Withdraw: React.FC = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<'usdt' | 'paypal'>('usdt');

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-ink mb-8 text-center">{t('withdraw.title')}</h1>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-50">
          <div className="bg-purple-50 rounded-2xl p-6 mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-subtext mb-1">{t('withdraw.balance')}</p>
              <p className="text-3xl font-bold text-ink">1,250.00 <span className="text-lg text-subtext font-medium">BWT</span></p>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
              <Wallet weight="fill" className="text-2xl" />
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 mb-8 flex items-start gap-3 border border-blue-100">
             <Info weight="fill" className="text-blue-500 text-xl flex-shrink-0 mt-0.5" />
             <p className="text-sm text-blue-800">{t('withdraw.breakdown')}</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-ink mb-2">{t('withdraw.amount')}</label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-purple-600 hover:text-purple-700 px-3 py-1 rounded-lg hover:bg-purple-50 transition-colors">
                  {t('withdraw.max')}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-ink mb-2">{t('withdraw.method')}</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setMethod('usdt')}
                  className={clsx(
                    "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
                    method === 'usdt' ? "border-purple-500 bg-purple-50 text-purple-700" : "border-gray-100 bg-white text-subtext hover:border-gray-200"
                  )}
                >
                  <CurrencyDollar weight="fill" className="text-2xl mb-2" />
                  <span className="font-bold">USDT</span>
                </button>
                <button
                  onClick={() => setMethod('paypal')}
                  className={clsx(
                    "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
                    method === 'paypal' ? "border-purple-500 bg-purple-50 text-purple-700" : "border-gray-100 bg-white text-subtext hover:border-gray-200"
                  )}
                >
                  <CreditCard weight="fill" className="text-2xl mb-2" />
                  <span className="font-bold">PayPal</span>
                </button>
              </div>
            </div>

            <Button variant="candy" className="w-full py-4 text-lg">
              {t('withdraw.submit')}
            </Button>

            <div className="text-center pt-2 space-y-2">
              <p className="text-xs text-subtext">
                {t('withdraw.note')}
              </p>
              <Link to="/transparency" className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors">
                <ShieldCheck weight="fill" />
                {t('withdraw.verify')} <ArrowRight weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
