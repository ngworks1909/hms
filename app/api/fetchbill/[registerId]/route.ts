import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: {registerId: string}}){
    const data = await prisma.registration.findUnique({
        where: {
            registerId: params.registerId,
            billPaid: false
        },
        select: {
            user: {
                select: {
                    username: true,
                    image: true,
                }
            },
            registerId: true,
            totalbill: true
        }
    });
    if(!data){
        return NextResponse.json({success: false, error: 'Bill already paid'})
    }
    return NextResponse.json({success: true, data})
}