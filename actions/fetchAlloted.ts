import prisma from "@/lib/client"

export const fetchAlloted = async() => {
    const pending = await prisma.registration.findMany({
        where: {
            isDischarged: false,
        },
        orderBy: {
            createdAt: "asc"
        },
        select: {
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
            totalbill: true
        }
    });
    return pending
}