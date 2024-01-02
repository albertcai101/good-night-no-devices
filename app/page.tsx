"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getDynamicMorningTextSize, getDynamicNightTextSize } from '@/utils/time';

export default function Home() {
  // State to hold text sizes
  const [morningTextSize, setMorningTextSize] = useState('12px');
  const [nightTextSize, setNightTextSize] = useState('12px');

  useEffect(() => {
    const updateTextSize = () => {
      const time = new Date(); 
      const offset = time.getTimezoneOffset() * 60000;
      const localTime = new Date(time.getTime() - offset);

      setMorningTextSize(getDynamicMorningTextSize(localTime) + 'px');
      setNightTextSize(getDynamicNightTextSize(localTime) + 'px');

      console.log('Updated text size to ' + getDynamicMorningTextSize(localTime) + ' and ' + getDynamicNightTextSize(localTime) + '.');
    };

    // Update text size immediately and every minute
    updateTextSize();
    const intervalId = setInterval(updateTextSize, 60000); // 60000 milliseconds = 1 minute
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-4">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="m-2">
          <Link href="/night">
            <span style={{ fontSize: nightTextSize }} className="gradient-text mb-18 cursor-pointer">I&apos;m about to sleep.</span>
          </Link>
        </div>
        <div className="m-2">
          <Link href="/morning">
            <span style={{ fontSize: morningTextSize }} className="gradient-text mb-18 cursor-pointer">I just woke up.</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
