import { Hero } from '@/components/Hero';
import { Introduction } from "@/components/Introduction"


import './app.css';

export default function Home() {
  return (
    <div className="mx-auto md:max-w-lg lg:max-w-7xl px-14">
      <Hero id="home" />
      <Introduction id="introduction" />
    </div>
  );
}