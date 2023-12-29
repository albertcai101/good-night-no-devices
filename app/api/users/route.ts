export async function POST(request: Request) {
    const { prisma } = await import("@/lib/prisma");

    const { id: userId } = await request.json();

    try {
        console.log('userId', userId)
        const user = await prisma.user.upsert({
            where: { id: userId },
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
        console.log(error);
        return new Response('Failed to upsert user', { status: 500 });
    }
    
}
