import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { CaretRight, BookOpen, Question, ShieldCheck, CurrencyDollar, Trophy, Gift, Users } from '@phosphor-icons/react';
import { clsx } from 'clsx';

export const Help: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('welcome');

  const menuItems = [
    { id: 'welcome', icon: <BookOpen weight="bold" /> },
    { id: 'quickStart', icon: <CaretRight weight="bold" /> },
    { id: 'modes', icon: <Trophy weight="bold" /> },
    { id: 'leaderboard', icon: <Trophy weight="bold" /> },
    { id: 'rewards', icon: <Gift weight="bold" /> },
    { id: 'bwt', icon: <CurrencyDollar weight="bold" /> },
    { id: 'treasure', icon: <Gift weight="bold" /> },
    { id: 'items', icon: <Gift weight="bold" /> },
    { id: 'referral', icon: <Users weight="bold" /> },
    { id: 'withdraw', icon: <CurrencyDollar weight="bold" /> },
    { id: 'transparency', icon: <ShieldCheck weight="bold" /> },
    { id: 'safety', icon: <ShieldCheck weight="bold" /> },
    { id: 'officialRules', icon: <BookOpen weight="bold" /> },
    { id: 'faq', icon: <Question weight="bold" /> },
  ];

  const renderMarkdown = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-2xl font-bold text-ink mt-6 mb-4">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-xl font-bold text-ink mt-5 mb-3">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-bold text-ink mt-4 mb-2">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 list-disc text-subtext mb-1">{line.replace('- ', '')}</li>;
      }
      if (line.startsWith('> ')) {
        return <blockquote key={index} className="border-l-4 border-purple-500 pl-4 py-2 my-4 bg-purple-50 text-subtext italic rounded-r">{line.replace('> ', '')}</blockquote>;
      }
      if (line.trim() === '') {
        return <div key={index} className="h-2"></div>;
      }
      return <p key={index} className="mb-2 text-subtext leading-relaxed">{line}</p>;
    });
  };

  const renderContent = (sectionId: string) => {
    const title = t(`help.sections.${sectionId}.title`);
    const body = t(`help.sections.${sectionId}.body`);
    
    return (
      <div>
        {/* Only show title if it's not in the body (some markdown files include title) */}
        {!body.startsWith('# ') && <h2 className="text-3xl font-bold text-ink mb-6">{title}</h2>}
        <div className="prose prose-purple max-w-none">
          {renderMarkdown(body)}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">{t('help.title')}</h1>
          <p className="text-xl text-subtext">{t('help.description')}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={clsx(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all",
                  activeSection === item.id 
                    ? "bg-white text-purple-600 shadow-md font-bold" 
                    : "text-subtext hover:bg-white/50 hover:text-ink"
                )}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{t(`help.toc.${item.id}`) || item.id}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 min-h-[500px]">
            {renderContent(activeSection)}
          </div>
        </div>
      </div>
    </div>
  );
};