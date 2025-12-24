import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'candy' | 'ghost' | 'soft' | 'danger';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'candy', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variant === 'candy' && 'btn-candy',
          variant === 'ghost' && 'btn-ghost',
          variant === 'soft' && 'bg-purple-100 text-purple-700 hover:bg-purple-200',
          variant === 'danger' && 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
