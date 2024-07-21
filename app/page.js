'use client'

import { Hero } from '../components/Hero';
import { Introduction } from '../components/Introduction';
import './app.css';

export default function Home() {
  return (
      <main>
        <div className="mx-auto md:max-w-lg lg:max-w-7xl px-14 pb-64">
          <Hero id="home" />
        </div>
        <Introduction id="introduction" />
      </main>
  );
}
