"use client";
import { useEffect } from 'react';
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export default function Morning() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();

    useEffect(() => {
        const postUser = async () => {
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
                // Only parse the response as JSON if there's a response body
                if (response.headers.get("Content-Type")?.includes("application/json")) {
                    const data = await response.json();
                    console.log("user Data logged:", data);
                } else {
                    console.log("user Response received, but not in JSON format");
                }
            } else {
                console.error("Failed to log user data");
            }

            const data = await response.json();
            console.log("User data logged:", data);
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

            const data = await response.json();
            console.log("Post data logged:", data);
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