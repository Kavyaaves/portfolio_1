/*
  Warnings:

  - You are about to drop the `MOPIyengar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MOPIyengar";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Iyengar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL
);
