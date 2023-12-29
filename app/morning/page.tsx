"use client";
import { useEffect } from 'react';
import { useAuth } from "@clerk/nextjs";
import Header from '@/components/header';
import Subpage from '@/components/subpage';
import { postUser, postMorning } from '@/utils/db';

export default function Morning() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();

    useEffect(() => {
        if (userId) {
            postUser(userId);
            postMorning(userId);
        }
    }
    , [userId]);

    return (
        <div className="flex flex-col min-h-screen p-4">
            <Header />
            <Subpage text="Rise and shine, get off your phone." />
        </div>
    )
}