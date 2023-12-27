export async function POST(request: Request) {
    const { prisma } = await import("@/lib/prisma");
    
    const { createdAt, isMorning, authorId } = await request.json();
    
    try {
        const post = await prisma.post.create({
            data: {
                createdAt,
                isMorning,
                authorId,
            },
        });
    
        return new Response(JSON.stringify(post), { 
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });    
    } catch (error) {
        return new Response('Failed to create post', { status: 500 })
    }
    
}
