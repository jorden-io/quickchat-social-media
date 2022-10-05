-- AlterTable
ALTER TABLE "users" ADD COLUMN     "userId" INTEGER;

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
