-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" TEXT
);

-- CreateTable
CREATE TABLE "Table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "field" TEXT NOT NULL,
    "complexity" TEXT NOT NULL,
    "timeDirection" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "rankingPlace" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "timeId" INTEGER NOT NULL,
    CONSTRAINT "Table_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Time" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "given" INTEGER NOT NULL,
    "used" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    CONSTRAINT "Time_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Actions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "given" INTEGER NOT NULL,
    "used" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    CONSTRAINT "Actions_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Table_timeId_key" ON "Table"("timeId");

-- CreateIndex
CREATE UNIQUE INDEX "Time_tableId_key" ON "Time"("tableId");

-- CreateIndex
CREATE UNIQUE INDEX "Actions_tableId_key" ON "Actions"("tableId");
