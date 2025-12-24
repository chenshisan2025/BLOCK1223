import React from 'react';

interface Split {
  width: string;
  color: string;
  text: string;
}

interface PoolSplitBarProps {
  label: string;
  splits: Split[];
}

export const PoolSplitBar: React.FC<PoolSplitBarProps> = ({ label, splits }) => {
  return (
    <div className="mb-6 w-full">
      <div className="flex justify-between mb-2">
        <span className="font-bold text-white/90 text-sm">{label}</span>
      </div>
      <div className="h-8 rounded-full flex overflow-hidden shadow-inner bg-black/20">
        {splits.map((split, i) => (
          <div 
            key={i} 
            className={`${split.color} flex items-center justify-center text-[10px] font-bold text-white whitespace-nowrap px-2 transition-all hover:opacity-90 relative group cursor-help`} 
            style={{ width: split.width }}
            title={split.text}
          >
            {split.text}
          </div>
        ))}
      </div>
    </div>
  );
};
