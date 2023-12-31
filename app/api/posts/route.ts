export async function POST(request: Request) {
    const { prisma } = await import("@/lib/prisma");
    
    const { authorId, nightOf, time, isNight } = await request.json();
    
    try {
        let post;
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
        } else {
            post = await prisma.post.upsert({
                where: {
                    authorId: authorId,
                    nightOf: nightOf,
                },
                update: {
                    wakeTime: time,
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