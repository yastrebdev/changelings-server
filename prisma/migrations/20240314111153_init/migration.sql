/*
  Warnings:

  - Made the column `status` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "name", "password", "status") SELECT "email", "id", "name", "password", "status" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
