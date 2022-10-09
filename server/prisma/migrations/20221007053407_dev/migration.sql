/*
  Warnings:

  - You are about to drop the `_membersTousers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_membersTousers" DROP CONSTRAINT "_membersTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_membersTousers" DROP CONSTRAINT "_membersTousers_B_fkey";

-- DropTable
DROP TABLE "_membersTousers";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
