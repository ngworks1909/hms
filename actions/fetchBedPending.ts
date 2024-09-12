import prisma from "@/lib/client"

export const fetchBedPending = async () => {
    const pending = await prisma.bedPendingRegistration.findMany({
        orderBy: {
            createdAt: "asc"
        },
        select:{
            user: {
                select: {
                    userId: true,
                    username: true,
                    mobile: true,
                    image: true
                }
            },
            doctor: {
                select: {
                    docterId: true,
                    doctorName: true
                }
            },
            registerId: true,
        }
    });
    return pending
}