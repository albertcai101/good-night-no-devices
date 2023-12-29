import Image from 'next/image';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex-grow text-center">
          <h1 className="text-2xl font-semibold text-gray-500">Good Night No Devices</h1>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="mb-4">
          <Link href="/morning">
            <span className="mb-18 text-lg cursor-pointer hover:text-gray-300">I just woke up.</span>
          </Link>
        </div>
        <Link href="/night">
          <span className="text-lg cursor-pointer hover:text-gray-300">I'm about to sleep.</span>
        </Link>
      </main>
    </div>
  );
}
