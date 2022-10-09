/*
  Warnings:

  - The primary key for the `members` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_member_id_fkey";

-- AlterTable
ALTER TABLE "members" DROP CONSTRAINT "members_pkey",
ADD CONSTRAINT "members_pkey" PRIMARY KEY ("member_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "members"("member_id") ON DELETE RESTRICT ON UPDATE CASCADE;
