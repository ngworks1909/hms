import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function UPDATE({params}: {params: {registerId: string}}) {
    const registerId = params.registerId;
    await prisma.$transaction(async(tx) => {
        const registration = await tx.registration.findUnique({
            where: {
                registerId
            },
            select: {
                billPaid: true,
                totalbill: true
            }
        });
        if(!registration?.billPaid){
            return NextResponse.json({success: false, error: `Pay the bill ${registration?.totalbill} to get discharged`})
        }
        const reg = await tx.registration.update({
            where: {
                registerId
            },
            data: {
                isDischarged: true,
            },
            select: {
                doctorId: true,
                bedId: true
            }
        });
        await tx.doctor.update({
            where: {
                docterId: reg.doctorId,
            },
            data: {
                isAssigned: false
            }
        });
        await tx.bed.update({
            where: {
                bedId: reg.bedId
            },
            data: {
                isAllocated: false
            }
        });

        return NextResponse.json({success: true, message: 'Youre discharged successfully'})

    })
}