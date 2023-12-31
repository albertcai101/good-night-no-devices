import { toNightOf } from "./date";

export const postUser = async (userId: string) => {
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

export const postMorning = async (userId: string, time: Date) => {
    const nightOf = toNightOf(time);

    const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
            authorId: userId,
            nightOf: nightOf,
            time: time,
            isNight: false,
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

export const postNight = async (userId: string, time: Date) => {
    const nightOf = toNightOf(time);

    const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
            authorId: userId,
            nightOf: nightOf,
            time: time,
            isNight: true,
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
