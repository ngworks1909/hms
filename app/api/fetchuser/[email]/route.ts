import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: {email: string}}){
    const users = await prisma.user.findMany({
        where: {
            email: {startsWith: params.email}
        },
        select: {
            userId: true,
            username: true,
            image: true,
            email: true
        }
    })
    return NextResponse.json({success: true, users})

}