"use client";
import { useEffect } from 'react';
import { useAuth } from "@clerk/nextjs";
import Header from '@/components/header';
import Subpage from '@/components/subpage';
import { postUser, postNight } from '@/utils/db';

export default function Night() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const time = new Date(); 
    const offset = time.getTimezoneOffset() * 60000;
    const localTime = new Date(time.getTime() - offset);

    useEffect(() => {
        if (userId) {
            postUser(userId);
            postNight(userId, localTime);
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