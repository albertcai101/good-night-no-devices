"use client";
import { useEffect } from 'react';
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";

export default function Morning() {

    useEffect(() => {
        const postDate = async () => {
            const response = await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    createdAt: new Date(),
                    isMorning: true,
                    authorId: "easter_egg",
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                // Only parse the response as JSON if there's a response body
                if (response.headers.get("Content-Type")?.includes("application/json")) {
                    const data = await response.json();
                    console.log("Data logged:", data);
                } else {
                    console.log("Response received, but not in JSON format");
                }
            } else {
                console.error("Server responded with an error:", response.status, response.statusText);
            }
        }; 

        postDate();
    }
    , []);

    return (
        <div> 
            <Link href="/">Good Morning</Link>
        </div>
    )
}