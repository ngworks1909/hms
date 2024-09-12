/*
  Warnings:

  - You are about to drop the column `isAssigned` on the `Bed` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Bed` table. All the data in the column will be lost.
  - Added the required column `bedId` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bed" DROP CONSTRAINT "Bed_userId_fkey";

-- AlterTable
ALTER TABLE "Bed" DROP COLUMN "isAssigned",
DROP COLUMN "userId",
ADD COLUMN     "isAllocated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Registration" ADD COLUMN     "bedId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PendingRegistration" (
    "registerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PendingRegistration_pkey" PRIMARY KEY ("registerId")
);

-- CreateTable
CREATE TABLE "BedPendingRegistration" (
    "registerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "BedPendingRegistration_pkey" PRIMARY KEY ("registerId")
);

-- AddForeignKey
ALTER TABLE "PendingRegistration" ADD CONSTRAINT "PendingRegistration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BedPendingRegistration" ADD CONSTRAINT "BedPendingRegistration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BedPendingRegistration" ADD CONSTRAINT "BedPendingRegistration_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("docterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_bedId_fkey" FOREIGN KEY ("bedId") REFERENCES "Bed"("bedId") ON DELETE RESTRICT ON UPDATE CASCADE;
