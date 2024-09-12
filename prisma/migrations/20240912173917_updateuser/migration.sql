-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'https://github.com/shadcn.png',
ADD COLUMN     "token" TEXT NOT NULL DEFAULT '';
