-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_fkey";

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
