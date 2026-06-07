-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "actividadFisica" INTEGER,
ADD COLUMN     "altura" DOUBLE PRECISION,
ADD COLUMN     "edad" INTEGER,
ADD COLUMN     "objetivo" TEXT,
ADD COLUMN     "onboardingCompleto" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "peso" DOUBLE PRECISION,
ADD COLUMN     "sexo" TEXT;
