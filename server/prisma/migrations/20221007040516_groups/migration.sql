/*
  Warnings:

  - A unique constraint covering the columns `[group_id]` on the table `members` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[member_id]` on the table `members` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_group_id_fkey";

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_member_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "members_group_id_key" ON "members"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "members_member_id_key" ON "members"("member_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "members"("member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "members"("group_id") ON DELETE RESTRICT ON UPDATE CASCADE;
