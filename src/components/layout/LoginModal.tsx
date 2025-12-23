import React from 'react';
import { X, SignIn, GoogleLogo, EnvelopeSimple } from '@phosphor-icons/react';
import { useLanguage } from '../../hooks/useLanguage';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative text-center">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-ink transition-colors"
        >
          <X weight="bold" className="text-xl" />
        </button>
        
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-purple-600">
          <SignIn weight="fill" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2">{t('login.title')}</h3>
        <p className="text-sm text-subtext mb-8">{t('login.subtitle')}</p>
        
        <div className="space-y-3">
          <button className="w-full py-3 rounded-full border border-gray-200 font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
            <GoogleLogo weight="fill" className="text-lg text-red-500" /> Google
          </button>
          <button className="w-full py-3 rounded-full border border-gray-200 font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
            <EnvelopeSimple weight="fill" className="text-lg text-gray-500" /> Email
          </button>
        </div>
        
        <p className="text-xs text-gray-400 mt-6">{t('login.note')}</p>
      </div>
    </div>
  );
};
