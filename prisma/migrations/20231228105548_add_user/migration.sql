-- CreateEnum
CREATE TYPE "TypeMessage" AS ENUM ('TEXT', 'AUDIO');

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "type" "TypeMessage" NOT NULL DEFAULT 'TEXT',
ALTER COLUMN "text" SET DEFAULT '';
