/*
  Warnings:

  - You are about to drop the column `Basionym` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `Habitat` on the `Marine` table. All the data in the column will be lost.
  - Added the required column `basionym` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `habitat` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img1Caption` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img2Caption` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img3Caption` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img4Caption` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img5Caption` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orientation` to the `Marine` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Freshwater" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img1" TEXT NOT NULL,
    "img2" TEXT NOT NULL,
    "img3" TEXT NOT NULL,
    "img4" TEXT NOT NULL,
    "img5" TEXT NOT NULL,
    "para1" TEXT NOT NULL,
    "para2" TEXT NOT NULL,
    "para3" TEXT NOT NULL,
    "para4" TEXT NOT NULL,
    "para5" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "basionym" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "orientation" TEXT NOT NULL,
    "img1Caption" TEXT NOT NULL,
    "img2Caption" TEXT NOT NULL,
    "img3Caption" TEXT NOT NULL,
    "img4Caption" TEXT NOT NULL,
    "img5Caption" TEXT NOT NULL,
    "classification" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Marine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img1" TEXT NOT NULL,
    "img2" TEXT NOT NULL,
    "img3" TEXT NOT NULL,
    "img4" TEXT NOT NULL,
    "img5" TEXT NOT NULL,
    "para1" TEXT NOT NULL,
    "para2" TEXT NOT NULL,
    "para3" TEXT NOT NULL,
    "para4" TEXT NOT NULL,
    "para5" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "basionym" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "orientation" TEXT NOT NULL,
    "img1Caption" TEXT NOT NULL,
    "img2Caption" TEXT NOT NULL,
    "img3Caption" TEXT NOT NULL,
    "img4Caption" TEXT NOT NULL,
    "img5Caption" TEXT NOT NULL
);
INSERT INTO "new_Marine" ("class", "desc", "division", "family", "id", "img1", "img2", "img3", "img4", "img5", "name", "order", "para1", "para2", "para3", "para4", "para5", "title") SELECT "class", "desc", "division", "family", "id", "img1", "img2", "img3", "img4", "img5", "name", "order", "para1", "para2", "para3", "para4", "para5", "title" FROM "Marine";
DROP TABLE "Marine";
ALTER TABLE "new_Marine" RENAME TO "Marine";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
