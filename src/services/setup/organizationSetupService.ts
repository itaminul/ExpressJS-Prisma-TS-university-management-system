import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { sendSuccessResponse } from "../../middleware/resposeMiddleware";

const prisma = new PrismaClient();
export class OrganizationSetupService {
  getAll = async() => {      
    try    {
      const results = await prisma.organization.findMany({
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
      const { serialNo, orgName, orgDescription}= req.body;
      const results = await prisma.organization.create({
        data: {
          serialNo: Number(serialNo),
          orgName,
          orgDescription
        }
      })
        sendSuccessResponse(200, results, res);
    } catch (error) {
      return error;      
    } finally {
      await prisma.$disconnect;
    }
  }

  update = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const { serialNo, orgName, orgDescription, activeStatus}= req.body;
      console.log("body", req.body);
      const results = await prisma.organization.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          serialNo: Number(serialNo),
          orgName,
          orgDescription,
          activeStatus

        }
      })
      return results;
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect;
    }
  }

  deleteDepartment(): string {
    return 'Delete Department';
  }
}
