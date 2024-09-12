import prisma from "@/lib/client"

export const fetchPending = async () => {
    const pending = await prisma.pendingRegistration.findMany({
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
            registerId: true,
        }
    })
    return pending
}