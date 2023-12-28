/*
  Warnings:

  - You are about to drop the column `usersId` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the `_UserConversation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_UserConversation" DROP CONSTRAINT "_UserConversation_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserConversation" DROP CONSTRAINT "_UserConversation_B_fkey";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "usersId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_UserConversation";

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
