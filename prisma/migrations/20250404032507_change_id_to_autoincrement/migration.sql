/*
  Warnings:

  - The primary key for the `movies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `movies` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `reviews` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `reviews` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `movieId` on the `reviews` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_movieId_fkey";

-- AlterTable
ALTER TABLE "movies" DROP CONSTRAINT "movies_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "movies_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "movieId",
ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD CONSTRAINT "reviews_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
