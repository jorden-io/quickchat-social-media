/*
  Warnings:

  - The primary key for the `members` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `_groupsTousers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_groupsTousers" DROP CONSTRAINT "_groupsTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_groupsTousers" DROP CONSTRAINT "_groupsTousers_B_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_fkey";

-- AlterTable
ALTER TABLE "members" DROP CONSTRAINT "members_pkey",
ADD CONSTRAINT "members_pkey" PRIMARY KEY ("member_id", "group_id");

-- DropTable
DROP TABLE "_groupsTousers";

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
