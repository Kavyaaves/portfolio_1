/*
  Warnings:

  - You are about to drop the column `classification` on the `Freshwater` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Freshwater" (
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
INSERT INTO "new_Freshwater" ("basionym", "class", "desc", "division", "family", "habitat", "id", "img1", "img1Caption", "img2", "img2Caption", "img3", "img3Caption", "img4", "img4Caption", "img5", "img5Caption", "name", "order", "orientation", "para1", "para2", "para3", "para4", "para5", "title") SELECT "basionym", "class", "desc", "division", "family", "habitat", "id", "img1", "img1Caption", "img2", "img2Caption", "img3", "img3Caption", "img4", "img4Caption", "img5", "img5Caption", "name", "order", "orientation", "para1", "para2", "para3", "para4", "para5", "title" FROM "Freshwater";
DROP TABLE "Freshwater";
ALTER TABLE "new_Freshwater" RENAME TO "Freshwater";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
