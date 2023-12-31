-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activeStatus" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "companyId" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "createdDate" TEXT,
ADD COLUMN     "createdTime" TEXT,
ADD COLUMN     "deptId" INTEGER,
ADD COLUMN     "desigId" INTEGER,
ADD COLUMN     "emailAddress" TEXT,
ADD COLUMN     "mobileNumber" TEXT,
ADD COLUMN     "orgId" INTEGER,
ADD COLUMN     "roleId" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "updatedDate" TEXT,
ADD COLUMN     "updatedTime" TEXT;
