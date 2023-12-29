"use client";
import { useEffect } from 'react';
import { useAuth } from "@clerk/nextjs";
import Header from '@/components/header';
import Subpage from '@/components/subpage';
import { postUser, postNight } from '@/utils/db';

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Night() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();

    useEffect(() => {
        if (userId) {
            postUser(userId);
            postNight(userId);
        }
    }
    , [userId]);

    return (
        <div className="flex flex-col min-h-screen p-4">
            <Header />
            <Subpage text="Good night, now put your phone away." />
        </div>
    )
}