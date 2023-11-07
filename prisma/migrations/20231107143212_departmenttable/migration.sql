-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "departmentName" TEXT NOT NULL,
    "departmentDescription" TEXT,
    "orgId" INTEGER,
    "companyId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);
