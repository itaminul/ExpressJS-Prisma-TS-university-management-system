import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();
export class EmployeeService {
  getAll = async() => {
    try {
      const results = await prisma.employeeInfo.findMany();
      return results;
    } catch (error) {
      console.log("error", error);
    }finally{
      await prisma.$disconnect;
    }
  }

  create = async(req: Request, res: Response) => {
    try {
      const {firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail, presentAddress} = req.body;

      const transaction = await prisma.$transaction(async (prisma) => {
        const parent = await prisma.employeeInfo.create({ data: {
          firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail
         } });
        const child = await prisma.employeePresentAddress.create({ 
          data: {
             empId: parent.id,
             presentVillRoad: presentAddress.presentVillRoad
             } });
    
        return { parent, child };
      });

      const results = await prisma.employeeInfo.create({
        data: {
          firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail
        }        
      })
      
      res.status(201).json({ message: 'Data inserted successfully!', transaction });
      // return results;
    // } catch (error) {
      // console.log("error", error);
    }finally {
      await prisma.$disconnect;
    }
  }

  update = async(req: Request) => {
    try {
      const {firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail} = req.body;
      const results = await prisma.employeeInfo.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail
        }        
      })
      return results;
    } catch (error) {
      console.log("error", error);
    }finally {
      await prisma.$disconnect;
    }
  }
}