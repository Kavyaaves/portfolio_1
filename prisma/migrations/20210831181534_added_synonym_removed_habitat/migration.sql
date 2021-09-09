/*
  Warnings:

  - You are about to drop the column `habitat` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `habitat` on the `Marine` table. All the data in the column will be lost.

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
    "synonym" TEXT NOT NULL DEFAULT '',
    "ecology" TEXT NOT NULL DEFAULT '',
    "orientation1" TEXT NOT NULL DEFAULT '5x7',
    "orientation2" TEXT NOT NULL DEFAULT '5x7',
    "orientation3" TEXT NOT NULL DEFAULT '5x7',
    "orientation4" TEXT NOT NULL DEFAULT '5x7',
    "orientation5" TEXT NOT NULL DEFAULT '5x7',
    "img1Caption" TEXT NOT NULL,
    "img2Caption" TEXT NOT NULL,
    "img3Caption" TEXT NOT NULL,
    "img4Caption" TEXT NOT NULL,
    "img5Caption" TEXT NOT NULL
);
INSERT INTO "new_Freshwater" ("basionym", "class", "desc", "division", "family", "id", "img1", "img1Caption", "img2", "img2Caption", "img3", "img3Caption", "img4", "img4Caption", "img5", "img5Caption", "name", "order", "orientation1", "orientation2", "orientation3", "orientation4", "orientation5", "para1", "para2", "para3", "para4", "para5", "title") SELECT "basionym", "class", "desc", "division", "family", "id", "img1", "img1Caption", "img2", "img2Caption", "img3", "img3Caption", "img4", "img4Caption", "img5", "img5Caption", "name", "order", "orientation1", "orientation2", "orientation3", "orientation4", "orientation5", "para1", "para2", "para3", "para4", "para5", "title" FROM "Freshwater";
DROP TABLE "Freshwater";
ALTER TABLE "new_Freshwater" RENAME TO "Freshwater";
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
    "img6" TEXT NOT NULL DEFAULT '',
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
    "synonym" TEXT NOT NULL DEFAULT '',
    "ecology" TEXT NOT NULL DEFAULT '',
    "distribution" TEXT NOT NULL DEFAULT '',
    "orientation1" TEXT NOT NULL DEFAULT '5x7',
    "orientation2" TEXT NOT NULL DEFAULT '5x7',
    "orientation3" TEXT NOT NULL DEFAULT '5x7',
    "orientation4" TEXT NOT NULL DEFAULT '5x7',
    "orientation5" TEXT NOT NULL DEFAULT '5x7',
    "orientation6" TEXT NOT NULL DEFAULT '5x7',
    "img1Caption" TEXT NOT NULL,
    "img2Caption" TEXT NOT NULL,
    "img3Caption" TEXT NOT NULL,
    "img4Caption" TEXT NOT NULL,
    "img5Caption" TEXT NOT NULL,
    "img6Caption" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Marine" ("basionym", "class", "desc", "distribution", "division", "ecology", "family", "id", "img1", "img1Caption", "img2", "img2Caption", "img3", "img3Caption", "img4", "img4Caption", "img5", "img5Caption", "img6", "img6Caption", "name", "order", "orientation1", "orientation2", "orientation3", "orientation4", "orientation5", "orientation6", "para1", "para2", "para3", "para4", "para5", "synonym", "title") SELECT "basionym", "class", "desc", "distribution", "division", "ecology", "family", "id", "img1", "img1Caption", "img2", "img2Caption", "img3", "img3Caption", "img4", "img4Caption", "img5", "img5Caption", "img6", "img6Caption", "name", "order", "orientation1", "orientation2", "orientation3", "orientation4", "orientation5", "orientation6", "para1", "para2", "para3", "para4", "para5", "synonym", "title" FROM "Marine";
DROP TABLE "Marine";
ALTER TABLE "new_Marine" RENAME TO "Marine";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
