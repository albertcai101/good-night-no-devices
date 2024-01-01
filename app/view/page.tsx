import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function View() {
    return (
      <div className="flex flex-col min-h-screen p-4">
        <Header />
        <main className="flex flex-col items-center justify-center flex-grow">
          <p className="mb-8 text-lg text-gray-400">This is the view page.</p>
        </main>
        <Footer />
      </div>
    );
}

