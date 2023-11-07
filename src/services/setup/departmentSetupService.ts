import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class DepartmentSetupService {

  getAll = async() => {
    try {
      const results = await prisma.department.findMany({
        where: {
          activeStatus: true
        }
      })
      return results;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      await prisma.$disconnect();
    }
  }

  create(): string {
    return 'create';
  }

  update(): string {
    return 'update';
  }

  deleteDepartment(): string {
    return 'Delete Department';
  }
}
