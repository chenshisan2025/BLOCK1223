import React from 'react';
import { Cube } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-purple-100 bg-white/50 backdrop-blur-md mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 opacity-50">
          <Cube weight="fill" className="text-lg" />
          <span className="font-bold">BLOCKWORLD</span>
        </div>
        <div className="text-xs text-gray-400">
          © 2024 BlockWorld. Human-only Arcade.
        </div>
      </div>
    </footer>
  );
};
