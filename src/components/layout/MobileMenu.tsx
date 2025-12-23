import React from 'react';
import { X } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onLoginClick }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8 animate-fade-in">
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 text-3xl text-subtext"
      >
        <X weight="bold" />
      </button>
      
      <div className="flex flex-col gap-4 text-center text-xl font-bold text-ink">
        <button onClick={() => handleNavigation('/')} className="hover:text-purple-600 transition-colors">
          {t('nav.play')}
        </button>
        <button onClick={() => handleNavigation('/rewards')} className="hover:text-purple-600 transition-colors">
          {t('nav.rewards')}
        </button>
        <button onClick={() => handleNavigation('/transparency')} className="hover:text-purple-600 transition-colors">
          {t('nav.transparency')}
        </button>
        <button onClick={() => handleNavigation('/leaderboard')} className="hover:text-purple-600 transition-colors">
          {t('nav.leaderboard')}
        </button>
        <button onClick={() => handleNavigation('/invite')} className="hover:text-purple-600 transition-colors">
          {t('nav.invite')}
        </button>
        
        <a 
          href="#safety" 
          onClick={onClose}
          className="text-subtext font-medium text-lg mt-4 hover:text-purple-600 transition-colors"
        >
          {t('nav.safety')}
        </a>
        <a 
          href="#faq" 
          onClick={onClose}
          className="text-subtext font-medium text-lg hover:text-purple-600 transition-colors"
        >
          {t('nav.help')}
        </a>
      </div>
      
      <Button 
        variant="candy"
        className="w-48"
        onClick={() => {
          onClose();
          onLoginClick();
        }}
      >
        {t('nav.login')}
      </Button>
    </div>
  );
};
