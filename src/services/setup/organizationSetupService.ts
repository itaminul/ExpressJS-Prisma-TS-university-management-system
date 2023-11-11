import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

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
      const { orgName, orgDescription}= req.body;
      const results = await prisma.organization.create({
        data: {
          orgName,
          orgDescription
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
      const { orgName, orgDescription, orgId, activeStatus}= req.body;
      console.log(req.body);
      const results = await prisma.organization.update({
        where: {
          id: Number(req.params)
        },
        data: {
          orgName,
          orgDescription,
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
