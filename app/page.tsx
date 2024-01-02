import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
    return (
      <div className="flex flex-col min-h-screen p-4">
        <Header />
        <main className="flex flex-col items-center justify-center flex-grow">
          <div className="mb-8">
            <Link href="/night">
              <span className="gradient-text text-lg cursor-pointer">I&apos;m about to sleep.</span>
            </Link>
          </div>
          <Link href="/morning">
            <span className="gradient-text mb-18 text-lg cursor-pointer">I just woke up.</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
}
