import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export class DepartmentSetupService {
  getAll = async() => {      
    try    {
      const results = await prisma.department.findMany()
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
      const results = await prisma.department.update({
        where: {
          id: Number(req.params.id)
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

  deleteDepartment = async(req: Request, res:Response) => {
    try {
     const result = await prisma.department.delete({
      where: {
        id: Number(req.params.id),
      }
     })
     return result;
    } catch (error) {
      console.log("error", error);
    }
  }
}