/*
  Warnings:

  - You are about to drop the `_groupsTousers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_groupsTousers" DROP CONSTRAINT "_groupsTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_groupsTousers" DROP CONSTRAINT "_groupsTousers_B_fkey";

-- DropTable
DROP TABLE "_groupsTousers";

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
