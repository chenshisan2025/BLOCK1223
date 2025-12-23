import React from 'react';
import { Hero } from '../components/home/Hero';
import { Drops } from '../components/home/Drops';
import { AhaDemo } from '../components/home/AhaDemo';
import { TreasureReferral } from '../components/home/TreasureReferral';
import { Steps } from '../components/home/Steps';
import { Safety } from '../components/home/Safety';
import { FAQ } from '../components/home/FAQ';

export const Home: React.FC = () => {
  return (
    <main className="fade-in">
      <Hero />
      <Drops />
      <AhaDemo />
      <TreasureReferral />
      <Steps />
      <Safety />
      <FAQ />
    </main>
  );
};
