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
            authorId: "easter_egg",
            nightOf: "2004-04-16T00:00:00.000Z",
            sleepTime: "2021-04-04T22:00:00.000Z",
            wakeTime: "2021-04-05T07:00:00.000Z",
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