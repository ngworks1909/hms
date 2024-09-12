import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {email} = body;
    await prisma.$transaction(async(tx) => {
        const user = await tx.user.findUnique({
            where: {
                email
            },
            select: {
                userId: true
            }
        });
        const existingPendingRegistration = await tx.pendingRegistration.findFirst({
            where: {
                userId: user?.userId
            }
        })
        if(existingPendingRegistration){
            return NextResponse.json({success: false, error: 'Can not register again. Waiting for doctor'})
        }
        const existingBedPendingRegistration = await tx.bedPendingRegistration.findFirst({
            where: {
                userId: user?.userId
            }
        })
        if(existingBedPendingRegistration){
            return NextResponse.json({success: false, error: 'Can not register again. Waiting for empty bed'})
        }
        const doctor = await tx.doctor.findFirst({
            where: {
                isAssigned: false
            },
            select: {
                docterId: true
            }
        });
        const bed = await tx.bed.findFirst({
            where: {
                isAllocated: false
            },
            select: {
                bedId: true
            }
        });
        if(!user){
            return NextResponse.json({success: false, error: 'Invalid user'})
        }
        if(!doctor){
            await tx.pendingRegistration.create({
                data: {
                    userId: user.userId
                }
            });
            return NextResponse.json({success: true, message: 'Registration pending. Waiting for doctor'})
        }
        if(!bed){
            await tx.bedPendingRegistration.create({
                data: {
                    userId: user.userId,
                    doctorId: doctor.docterId
                }
            })
            await prisma.doctor.update({
                where: {
                    docterId: doctor.docterId
                },
                data: {
                    isAssigned: true
                }
            })
            return NextResponse.json({success: true, message: 'Doctor Assigned. Waiting for bed'})
        }
        if(doctor && bed){
            await tx.registration.create({
                data: {
                    userId: user.userId,
                    doctorId: doctor.docterId,
                    bedId: bed.bedId
                }
            });
            await tx.doctor.update({
                where: {
                    docterId: doctor.docterId
                },
                data: {
                    isAssigned: true
                }
            });
            await tx.bed.update({
                where: {
                    bedId: bed.bedId
                },
                data: {
                    isAllocated: true
                }
            })
            return NextResponse.json({success: true, message: 'Registration successful'})
        }
    })
}