import prisma from "@/lib/client"
import { NextResponse } from "next/server";


export async function UPDATE({params} : { params: {registerId: string} }){
    const registerId = params.registerId
    try {
        await prisma.registration.update({
            where: {
                registerId
            },
            data: {
                billPaid: true
            }
        });
        return NextResponse.json({success: true, message: 'Bill paid successfully'})
    } catch (error) {
        return NextResponse.json({success: false, error: 'Internal server error'})
    }
}