import { calculateDuration } from "@/utils/date";

// TODO: do not allow users to post a later wake time, and do not allow users to post
// a sleep time after wake time is already made.
export async function POST(request: Request) {
    const { prisma } = await import("@/lib/prisma");
    
    const { authorId, nightOf, time, isNight } = await request.json();

    console.log("Posting", isNight, "information for", authorId, "on", nightOf);
    
    try {
        const existingPost = await prisma.post.findUnique({
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

export async function GET(request: Request) {
    const { prisma } = await import("@/lib/prisma");
    
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
        return new Response('User ID is required', { status: 400 });
    }

    try {
        const posts = await prisma.post.findMany({
            where: {
                authorId: userId,
            },
            orderBy: {
                nightOf: 'desc',
            },
            select: {
                authorId: true,
                nightOf: true,
                sleepDuration: true,
            },
        });

        return new Response(JSON.stringify(posts), { 
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });    
    } catch (error) {
        console.error(error);
        return new Response('Failed to get posts', { status: 500 });
    }
}
