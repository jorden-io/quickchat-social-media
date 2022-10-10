-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_member_id_fkey";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "members"("member_id") ON DELETE RESTRICT ON UPDATE CASCADE;
