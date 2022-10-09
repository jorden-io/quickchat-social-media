/*
  Warnings:

  - You are about to drop the `_groupsTomembers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_groupsTomembers" DROP CONSTRAINT "_groupsTomembers_A_fkey";

-- DropForeignKey
ALTER TABLE "_groupsTomembers" DROP CONSTRAINT "_groupsTomembers_B_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_fkey";

-- DropTable
DROP TABLE "_groupsTomembers";

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("group_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
