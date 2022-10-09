/*
  Warnings:

  - You are about to drop the `_groupsTousers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_groupsTousers" DROP CONSTRAINT "_groupsTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_groupsTousers" DROP CONSTRAINT "_groupsTousers_B_fkey";

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_group_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_fkey";

-- DropIndex
DROP INDEX "members_group_id_key";

-- DropIndex
DROP INDEX "members_member_id_key";

-- DropTable
DROP TABLE "_groupsTousers";

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("group_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
