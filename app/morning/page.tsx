"use client";
import { useEffect } from 'react';
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from '@clerk/nextjs';

export default function Morning() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();

    useEffect(() => {
        const postUser = async () => {
            console.log("userId:", userId)
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({
                    id: userId,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("User ID upserted:", data);
            } else {
                console.error("Failed to upsert user ID");
            }
        };

        const postDate = async () => {
            const response = await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    createdAt: new Date(),
                    isMorning: true,
                    authorId: userId,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Post information posted:", data);
            } else {
                console.error("Failed to post Post information");
            }
        }; 

        postUser();
        postDate();
    }
    , [userId]);

    return (
        <div className="flex flex-col min-h-screen p-4">
            <div className="flex justify-between items-center w-full">
                <div className="flex-grow text-center">
                <h1 className="text-2xl font-semibold text-gray-500">Good Night No Devices</h1>
                </div>
                <UserButton afterSignOutUrl="/" />
            </div>
            <main className="flex flex-col items-center justify-center flex-grow">
                <span className="mb-4 text-lg text-gray-500">Rise and shine, get off your phone.</span>
                <Link href="/">
                    <span className="text-lg cursor-pointer hover:text-gray-300">Home</span>
                </Link>
            </main>
        </div>
    )
}