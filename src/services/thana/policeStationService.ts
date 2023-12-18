import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export class PoliceStationService {
  getAll = async() => {      
    try    {
      const results = await prisma.thana.findMany()
      return results;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      await prisma.$disconnect();
    }
  }

  create = async(req: Request, res: Response) => {
    try {
      const { thanaName, thanaDes, orgId}= req.body;
      const results = await prisma.thana.create({
        data: {
          thanaName,
          thanaDes,
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
      const { thanaName, thanaDes, orgId, activeStatus}= req.body;
      const results = await prisma.thana.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          thanaName,
          thanaDes,
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

  deletePoliceStation = async(req: Request, res:Response) => {
    try {
     const result = await prisma.thana.delete({
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
