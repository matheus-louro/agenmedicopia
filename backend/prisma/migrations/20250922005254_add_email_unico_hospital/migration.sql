/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `hospitais` will be added. If there are existing duplicate values, this will fail.
  - Made the column `senha` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."usuarios" ALTER COLUMN "senha" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "hospitais_email_key" ON "public"."hospitais"("email");
