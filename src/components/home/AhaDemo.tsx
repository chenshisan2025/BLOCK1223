import React, { useState } from 'react';
import { Check, Users, Wallet, Info, ArrowCounterClockwise } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const AhaDemo: React.FC = () => {
  const { t } = useLanguage();
  const [state, setState] = useState<'idle' | 'revealed'>('idle');
  const [toasts, setToasts] = useState<Array<{ id: number, text: string, type: 'coin' | 'badge' }>>([]);
  const [isShaking, setIsShaking] = useState(false);

  const triggerAhaDemo = () => {
    if (state === 'revealed') return;
    
    setIsShaking(true);
    
    setTimeout(() => {
      setState('revealed');
      setIsShaking(false);
      
      // Toasts
      showToast("Just won 5 USDT!", "coin");
      setTimeout(() => showToast("Got a Rare Badge", "badge"), 800);
    }, 600);
  };

  const showToast = (text: string, type: 'coin' | 'badge') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 2500);
  };

  const resetAhaDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setState('idle');
    setToasts([]);
  };

  return (
    <section id="aha-demo" className="max-w-6xl mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t('home.aha.title')}</h2>
          <p className="text-lg text-subtext mb-8 leading-relaxed">{t('home.aha.subtitle')}</p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-lg">
                <Check weight="fill" />
              </div>
              <span className="font-medium text-ink">{t('home.aha.points.0')}</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-lg">
                <Users weight="fill" />
              </div>
              <span className="font-medium text-ink">{t('home.aha.points.1')}</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-500 flex items-center justify-center text-lg">
                <Wallet weight="fill" />
              </div>
              <span className="font-medium text-ink">{t('home.aha.points.2')}</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <Button>{t('home.aha.cta.play')}</Button>
            <Button variant="ghost">{t('home.aha.cta.watch')}</Button>
          </div>
          <p className="text-xs text-subtext mt-4 flex items-center gap-1">
            <Info weight="fill" /> <span>{t('home.aha.demoNote')}</span>
          </p>
        </div>

        {/* Right: Interactive Demo */}
        <div className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-[40px] -z-10 rotate-3"></div>
          
          <Card 
            className={`w-full max-w-sm p-8 text-center cursor-pointer transition-all duration-300 ${state === 'revealed' ? 'scale-105 shadow-2xl' : ''}`}
            onClick={triggerAhaDemo}
          >
            {state === 'idle' ? (
              <div id="demo-state-idle">
                <div className="absolute top-4 right-4 bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Demo</div>
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <div className={`w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl shadow-lg flex items-center justify-center text-6xl text-white border-4 border-white/40 ${isShaking ? 'animate-shake' : 'animate-float'}`}>
                    🎁
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('home.hero.boxCard.title')}</h3>
                <div className="mt-6 w-full py-3 rounded-full bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition-colors">
                  {t('common.cta.openNow')}
                </div>
              </div>
            ) : (
              <div id="demo-state-revealed">
                <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 text-5xl animate-pop">💎</div>
                <p className="text-xs font-bold text-subtext uppercase tracking-widest mb-1">{t('common.label.estReward')}</p>
                <h3 className="text-3xl font-extrabold text-ink mb-6">5 USDT</h3>
                <button 
                  className="w-full py-3 rounded-full bg-gray-100 text-ink font-bold hover:bg-gray-200 transition-colors mb-2 flex items-center justify-center gap-2"
                  onClick={resetAhaDemo}
                >
                  <ArrowCounterClockwise weight="bold" /> {t('common.cta.playAgain')}
                </button>
              </div>
            )}
          </Card>

          {/* Floating Toasts */}
          <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none overflow-hidden">
            {toasts.map((toast) => (
              <div
                key={toast.id}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-purple-100 text-sm font-bold animate-slide-up whitespace-nowrap z-20"
                style={{
                  transform: `translate(calc(-50% + ${(Math.random() - 0.5) * 100}px), calc(-50% + ${(Math.random() - 1) * 100 - 50}px))`
                }}
              >
                <span>{toast.type === 'coin' ? '💰' : '🏅'}</span> <span>{toast.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
