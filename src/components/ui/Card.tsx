import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'juicy' | 'flat' | 'glass';
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'juicy', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-3xl transition-all duration-300',
          variant === 'juicy' && 'card-juicy relative overflow-hidden',
          variant === 'flat' && 'bg-white border border-gray-100 shadow-sm hover:shadow-md',
          variant === 'glass' && 'bg-white/60 backdrop-blur-md border border-white/40 shadow-lg',
          className
        )}
        {...props}
      >
        {variant === 'juicy' && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
