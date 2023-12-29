"use client";
import { useEffect } from 'react';
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

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
        <div> 
            <Link href="/">Good Morning</Link>
        </div>
    )
}