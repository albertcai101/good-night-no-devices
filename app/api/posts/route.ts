import { calculateDuration } from "@/utils/date";

export async function POST(request: Request) {
    const { prisma } = await import("@/lib/prisma");
    
    const { authorId, nightOf, time, isNight } = await request.json();
    
    try {
        let existingPost = await prisma.post.findUnique({
            where: {
                authorId: authorId,
                nightOf: nightOf,
            },
        });

        let post;

        
        // Night Code
        if (isNight) {
            post = await prisma.post.upsert({
                where: {
                    authorId: authorId,
                    nightOf: nightOf,
                },
                update: {
                    sleepTime: time,
                },
                create: {
                    authorId: authorId,
                    nightOf: nightOf,
                    sleepTime: time,
                },
            });
        } 
        // Morning Code
        else {
            post = await prisma.post.upsert({
                where: {
                    authorId: authorId,
                    nightOf: nightOf,
                },
                update: {
                    wakeTime: time,
                    ...(existingPost?.sleepTime && { sleepDuration: calculateDuration(existingPost.sleepTime, time) }),
                },
                create: {
                    authorId: authorId,
                    nightOf: nightOf,
                    wakeTime: time,
                },
            });
        }
    
        return new Response(JSON.stringify(post), { 
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });    
    } catch (error) {
        console.error(error);
        return new Response('Failed to create post', { status: 500 })
    }
}