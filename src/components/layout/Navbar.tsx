import React, { useState } from 'react';
import { Cube, List } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { LoginModal } from './LoginModal';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const { t, currentLang, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Cube weight="fill" className="text-xl" />
          </div>
          <span className="font-bold text-xl tracking-tight text-ink">
            BLOCK<span className="text-purple-500">WORLD</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-1 font-medium text-subtext bg-white/50 backdrop-blur-sm p-1 rounded-full border border-white/60">
          <Link
            to="/"
            className={clsx(
              "px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all",
              isActive('/') && "active-nav"
            )}
          >
            {t('nav.play')}
          </Link>
          <Link
            to="/rewards"
            className={clsx(
              "px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all",
              isActive('/rewards') && "active-nav"
            )}
          >
            {t('nav.rewards')}
          </Link>
          <Link
            to="/transparency"
            className={clsx(
              "px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all",
              isActive('/transparency') && "active-nav"
            )}
          >
            {t('nav.transparency')}
          </Link>
          <Link
            to="/leaderboard"
            className={clsx(
              "px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all",
              isActive('/leaderboard') && "active-nav"
            )}
          >
            {t('nav.leaderboard')}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex gap-3 text-sm text-subtext font-medium mr-2">
            <a href="#safety" className="hover:text-purple-600">{t('nav.safety')}</a>
            <a href="#faq" className="hover:text-purple-600">{t('nav.help')}</a>
          </div>
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full bg-white border border-purple-100 text-subtext hover:text-purple-600 flex items-center justify-center transition-colors font-bold text-xs"
          >
            {currentLang.toUpperCase()}
          </button>
          <Link 
            to="/invite"
            className="hidden md:block px-5 py-2 rounded-full bg-white border border-purple-100 text-purple-600 font-semibold shadow-sm hover:bg-purple-50 hover:scale-105 active:scale-95 transition-all text-sm"
          >
            {t('nav.invite')}
          </Link>
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="hidden md:block px-5 py-2 rounded-full bg-white border border-purple-100 text-purple-600 font-semibold shadow-sm hover:bg-purple-50 hover:scale-105 active:scale-95 transition-all text-sm"
          >
            {t('nav.login')}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 rounded-full bg-white border border-purple-100 text-subtext flex items-center justify-center"
          >
            <List weight="bold" className="text-xl" />
          </button>
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onLoginClick={() => setIsLoginOpen(true)}
      />
    </>
  );
};
