import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export class DesignationSetupService {
  getAll = async() => {      
    try    {
      const results = await prisma.designation.findMany()
      return results;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  create = async(req: Request, res: Response) => {
    try {
      const { designationName, designationDes, orgId}= req.body;
      const results = await prisma.designation.create({
        data: {
          designationName,
          designationDes,
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
      const { designationName, designationDes, orgId, activeStatus}= req.body;
      const results = await prisma.designation.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          designationName,
          designationDes,
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