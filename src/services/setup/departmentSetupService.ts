import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export class DepartmentSetupService {
  getAll = async() => {      
    try    {
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

  create = async(req: Request, res: Response) => {
    try {
      const { departmentName, departmentDescription, orgId}= req.body;
      const results = await prisma.department.create({
        data: {
          departmentName,
          departmentDescription,
          orgId
        }
      })
      return results;
    } catch (error) {
      return error;      
    } finally {
      await prisma.$disconnect;
    }
  }

  update = async(req: Request, res: Response) => {
    try {
      const { departmentName, departmentDescription, orgId, activeStatus}= req.body;
      console.log(req.body);
      const results = await prisma.department.update({
        where: {
          id: Number(req.params)
        },
        data: {
          departmentName,
          departmentDescription,
          orgId,
          activeStatus

        }
      })
      return results;
    } catch (error) {
      return error;
    } finally {
      await prisma.$disconnect;
    }
  }

  deleteDepartment(): string {
    return 'Delete Department';
  }
}
