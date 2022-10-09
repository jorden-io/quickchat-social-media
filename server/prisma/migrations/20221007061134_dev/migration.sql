/*
  Warnings:

  - The primary key for the `members` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "members" DROP CONSTRAINT "members_pkey",
ADD CONSTRAINT "members_pkey" PRIMARY KEY ("member_id", "group_id");
