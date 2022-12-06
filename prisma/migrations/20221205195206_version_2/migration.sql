/*
  Warnings:

  - You are about to drop the column `additionalImages` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img1` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img2` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img2Caption` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img3` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img3Caption` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img4` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img4Caption` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img5` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `img5Caption` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `orientation1` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `orientation2` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `orientation3` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `orientation4` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `orientation5` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `para3` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `para4` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `para5` on the `Freshwater` table. All the data in the column will be lost.
  - You are about to drop the column `additionalImages` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img1` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img2` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img2Caption` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img3` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img3Caption` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img4` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img4Caption` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img5` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img5Caption` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img6` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `img6Caption` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `orientation1` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `orientation2` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `orientation3` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `orientation4` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `orientation5` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `orientation6` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `para3` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `para4` on the `Marine` table. All the data in the column will be lost.
  - You are about to drop the column `para5` on the `Marine` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Freshwater" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "para1" TEXT NOT NULL,
    "para2" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "basionym" TEXT NOT NULL,
    "synonym" TEXT NOT NULL DEFAULT '',
    "ecology" TEXT NOT NULL DEFAULT '',
    "distribution" TEXT NOT NULL DEFAULT '',
    "img1Caption" TEXT NOT NULL,
    "imgCaption" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Freshwater" ("basionym", "class", "desc", "distribution", "division", "ecology", "family", "id", "img1Caption", "name", "order", "para1", "para2", "synonym", "title") SELECT "basionym", "class", "desc", "distribution", "division", "ecology", "family", "id", "img1Caption", "name", "order", "para1", "para2", "synonym", "title" FROM "Freshwater";
DROP TABLE "Freshwater";
ALTER TABLE "new_Freshwater" RENAME TO "Freshwater";
CREATE TABLE "new_Marine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "para1" TEXT NOT NULL,
    "para2" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "basionym" TEXT NOT NULL,
    "synonym" TEXT NOT NULL DEFAULT '',
    "ecology" TEXT NOT NULL DEFAULT '',
    "distribution" TEXT NOT NULL DEFAULT '',
    "img1Caption" TEXT NOT NULL,
    "imgCaption" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Marine" ("basionym", "class", "desc", "distribution", "division", "ecology", "family", "id", "img1Caption", "name", "order", "para1", "para2", "synonym", "title") SELECT "basionym", "class", "desc", "distribution", "division", "ecology", "family", "id", "img1Caption", "name", "order", "para1", "para2", "synonym", "title" FROM "Marine";
DROP TABLE "Marine";
ALTER TABLE "new_Marine" RENAME TO "Marine";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
