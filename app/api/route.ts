import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET_ALL_USERS(request: Request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const post = await prisma.post.create({
      data: json,
    });

    return new NextResponse(JSON.stringify(post), { 
        status: 201, 
        headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
