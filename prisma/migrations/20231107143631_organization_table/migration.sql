-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "orgName" TEXT NOT NULL,
    "orgDescription" TEXT,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);
