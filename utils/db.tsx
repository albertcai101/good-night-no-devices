export const postUser = async (userId: string) => {
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

export const postMorning = async (userId: string) => {
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

export const postNight = async (userId: string) => {
    const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
            createdAt: new Date(),
            isMorning: false,
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
