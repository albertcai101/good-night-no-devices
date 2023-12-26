import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            id: "easter_egg",
        }
    });
    await prisma.post.create({
        data: {
            createdAt: new Date(),
            isMorning: true,
            authorId: "easter_egg",
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });