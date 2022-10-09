/*
  Warnings:

  - You are about to drop the `_groupsTomembers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_membersTousers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_groupsTomembers" DROP CONSTRAINT "_groupsTomembers_A_fkey";

-- DropForeignKey
ALTER TABLE "_groupsTomembers" DROP CONSTRAINT "_groupsTomembers_B_fkey";

-- DropForeignKey
ALTER TABLE "_membersTousers" DROP CONSTRAINT "_membersTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_membersTousers" DROP CONSTRAINT "_membersTousers_B_fkey";

-- DropTable
DROP TABLE "_groupsTomembers";

-- DropTable
DROP TABLE "_membersTousers";

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("group_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
