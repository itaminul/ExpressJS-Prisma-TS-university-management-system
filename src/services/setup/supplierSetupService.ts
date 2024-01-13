import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class SupplierSetupService {

   getAll= async() => {
    try {
      const results = await prisma.supplier.createMany();
      return results;

    } catch (error) {
      console.error('Error fetching data:', error);
    }
   }

   create = async(req: Request, res: Response) => {
    try {
      const {supplierName,supplierDescription,supplierType,orgId} = req.body;
      const results = await prisma.supplier.create({
        data: {
          supplierName,supplierDescription,supplierType,orgId
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
      const {supplierName,supplierDescription,supplierType,orgId} = req.body;
      const results = await prisma.supplier.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          supplierName,supplierDescription,supplierType,orgId
        }
      })
      
      return results;
    } catch (error) {
      return error;
    } finally {
      await prisma.$disconnect;
    }
   }

}