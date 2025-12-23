import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("group bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300", isOpen ? "shadow-md" : "", className)}>
      <button
        className="w-full flex justify-between items-center p-4 md:p-5 font-bold text-ink hover:text-[#7B61FF] transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={cn("text-gray-400 group-hover:text-[#7B61FF] transition-transform duration-200", isOpen ? "rotate-180" : "")}>
          <CaretDown weight="bold" />
        </span>
      </button>
      <div
        className={cn(
          "px-5 text-sm text-subtext leading-relaxed transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};
