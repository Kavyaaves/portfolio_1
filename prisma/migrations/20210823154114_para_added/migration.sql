/*
  Warnings:

  - Added the required column `para1` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `para2` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `para3` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `para4` to the `Marine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `para5` to the `Marine` table without a default value. This is not possible if the table is not empty.

*/
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
    "Basionym" TEXT NOT NULL,
    "Habitat" TEXT NOT NULL
);
INSERT INTO "new_Marine" ("Basionym", "Habitat", "class", "desc", "division", "family", "id", "img1", "img2", "img3", "img4", "img5", "name", "order", "title") SELECT "Basionym", "Habitat", "class", "desc", "division", "family", "id", "img1", "img2", "img3", "img4", "img5", "name", "order", "title" FROM "Marine";
DROP TABLE "Marine";
ALTER TABLE "new_Marine" RENAME TO "Marine";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
