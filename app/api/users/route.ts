export async function POST(request: Request) {
    const { prisma } = await import("@/lib/prisma");
    console.log("hello, can you hear me");
    const { userId, } = await request.json();
    
    try {
        const user = await prisma.user.upsert({
            where: {
                id: userId,
            },
            update: {},
            create: {
                id: userId,
            },
        });
    
        return new Response(JSON.stringify(user), { 
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });    
    } catch (error) {
        return new Response('Failed to create user', { status: 500 })
    }
    
}
