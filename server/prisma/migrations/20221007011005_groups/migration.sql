-- CreateTable
CREATE TABLE "groups" (
    "group_id" SERIAL NOT NULL,
    "group_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "leader_id" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("group_id")
);

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "member_id" INTEGER NOT NULL,
    "joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_groupsTomembers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_membersTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_groupsTomembers_AB_unique" ON "_groupsTomembers"("A", "B");

-- CreateIndex
CREATE INDEX "_groupsTomembers_B_index" ON "_groupsTomembers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_membersTousers_AB_unique" ON "_membersTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_membersTousers_B_index" ON "_membersTousers"("B");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupsTomembers" ADD CONSTRAINT "_groupsTomembers_A_fkey" FOREIGN KEY ("A") REFERENCES "groups"("group_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupsTomembers" ADD CONSTRAINT "_groupsTomembers_B_fkey" FOREIGN KEY ("B") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membersTousers" ADD CONSTRAINT "_membersTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membersTousers" ADD CONSTRAINT "_membersTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
