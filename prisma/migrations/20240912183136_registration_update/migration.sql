-- AlterTable
ALTER TABLE "Registration" ADD COLUMN     "billPaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isDischarged" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "totalbill" DOUBLE PRECISION NOT NULL DEFAULT 0;
