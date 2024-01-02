"use client";
import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const isHomePage = usePathname() === '/';

    // CSS classes for the back button
    const backButtonBaseClass = "mr-4";
    const backButtonVisibleClass = isHomePage ? "invisible" : "visible stroke-current";
    const backButtonHoverClass = "hover:stroke-[#b8a3f6]";

    return (
        <div className="flex items-center justify-between w-full">
            {/* Left Column - Always render the button but control visibility */}
            <div className="flex justify-start">
                <button onClick={() => router.back()} className={`${backButtonBaseClass} ${backButtonVisibleClass} ${backButtonHoverClass}`}>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Center Column */}
            <div className="flex justify-center flex-grow">
                <Link href="/">
                    <span className="gradient-header">Good Night No Devices</span>
                </Link>
            </div>

            {/* Right Column */}
            <div className="flex justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};

export default Header;
