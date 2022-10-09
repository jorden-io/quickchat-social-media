-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_leader_id_fkey";

-- CreateTable
CREATE TABLE "_groupsTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_groupsTousers_AB_unique" ON "_groupsTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_groupsTousers_B_index" ON "_groupsTousers"("B");

-- AddForeignKey
ALTER TABLE "_groupsTousers" ADD CONSTRAINT "_groupsTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "groups"("group_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupsTousers" ADD CONSTRAINT "_groupsTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
