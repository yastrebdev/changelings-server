/*
  Warnings:

  - You are about to drop the `Actions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Time` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `timeId` on the `Table` table. All the data in the column will be lost.
  - Added the required column `actionsGiven` to the `Table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actionsUsed` to the `Table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeGiven` to the `Table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeUsed` to the `Table` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Actions_tableId_key";

-- DropIndex
DROP INDEX "Time_tableId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Actions";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Time";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "field" TEXT NOT NULL,
    "complexity" TEXT NOT NULL,
    "timeDirection" TEXT NOT NULL,
    "timeGiven" DATETIME NOT NULL,
    "timeUsed" DATETIME NOT NULL,
    "actionsGiven" INTEGER NOT NULL,
    "actionsUsed" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "rankingPlace" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Table_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Table" ("authorId", "complexity", "date", "field", "id", "rankingPlace", "score", "timeDirection") SELECT "authorId", "complexity", "date", "field", "id", "rankingPlace", "score", "timeDirection" FROM "Table";
DROP TABLE "Table";
ALTER TABLE "new_Table" RENAME TO "Table";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
