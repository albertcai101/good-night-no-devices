"use client";
import { useEffect } from 'react';
import { useAuth } from "@clerk/nextjs";
import Header from '@/components/header';
import Subpage from '@/components/subpage';
import { postUser, postMorning } from '@/utils/db';
import Footer from '@/components/footer';
import { useRouter } from 'next/navigation';

export default function Morning() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const time = new Date(); 
    const offset = time.getTimezoneOffset() * 60000;
    const localTime = new Date(time.getTime() - offset);

    const router = useRouter();

    useEffect(() => {
        if (userId) {
            postUser(userId);
            postMorning(userId, localTime);
        }

        // Set a timeout for redirection
        const timer = setTimeout(() => {
            router.push('/'); // Redirect to the home page
        }, 3000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }
    , [userId]);

    return (
        <div className="flex flex-col min-h-screen p-4">
            <Header />
            <Subpage text="Rise and shine, get off your phone." />
            <Footer />
        </div>
    )
}