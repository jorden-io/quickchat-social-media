-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_member_id_fkey";

-- CreateTable
CREATE TABLE "_membersTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_membersTousers_AB_unique" ON "_membersTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_membersTousers_B_index" ON "_membersTousers"("B");

-- AddForeignKey
ALTER TABLE "_membersTousers" ADD CONSTRAINT "_membersTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membersTousers" ADD CONSTRAINT "_membersTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
