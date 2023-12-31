import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { sendSuccessResponse } from "../middleware/resposeMiddleware";
import { sendErrorResponse } from "../middleware/resposeMiddleware";
const prisma = new PrismaClient();
export class EmployeeService {
  getAll = async() => {
    try {
      const results = await prisma.employeeInfo.findMany({
        include: {
          employeePresentAddress: {
            include: {
              thana: true
            }
          },
          employeePermanentAddress: {
            include: {
              thana: true
            }
          }          
        }
      });
      return results;
    } catch (error) {
      console.log("error", error);
    }finally{
      await prisma.$disconnect;
    }
  }

  create = async(req: Request, res: Response, next: NextFunction) => {  

    try {
      const {firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail, employeePresentAddress,departmentId,designationId,religionId,bloodGroupId,genderId,employeePermanentAddress} = req.body;
      console.log("req body", req.body);
      await prisma.$transaction(async (prisma) => {
        const createdParent = await prisma.employeeInfo.create({
          data: {
            firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail,departmentId,designationId,religionId,bloodGroupId,genderId,
            employeePresentAddress: {
              createMany: {
                data: employeePresentAddress,
              },
            },
            
            employeePermanentAddress: {
              createMany: {
                data: employeePermanentAddress,
              },
            }            
          },
          include: {
            employeePresentAddress: true,
            employeePermanentAddress: true
          },
        });
  
        // return createdParent;
        res.status(201).json({ message: 'Parent and children inserted successfully', createdParent });
      });
      // return createdParent;
      
    } catch (error) {
      next(error);
      //res.status(500).json({ error: 'Error creating parent and children in transaction' });
    }

     /* try {
        const {firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail, empPresentAddress} = req.body;
        console.log("req", req.body);
        await prisma.$transaction(async (prisma) => {
          const createdParent = await prisma.employeeInfo.create({
            data: {
              firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail
            },
          });
    
          const childCreatePromises = empPresentAddress.map((pValue: { presentCityCor: any; presentWord: any; }) => {
            return prisma.employeePresentAddress.create({
              data: {
                empId: createdParent.id,
                presentCityCor: pValue.presentCityCor,
                presentWord: pValue.presentWord
              },
            });
          });
    
          await Promise.all(childCreatePromises);
          // return createdParent;
        });
        res.status(201).json({ message: 'Parent and children inserted successfully', transaction });
    
    } catch (error) {
      console.log("error", error);
      next(error);
    } */
  }

  update = async(req: Request, res: Response, next: NextFunction) => {
    try {
      await prisma.employeePermanentAddress.deleteMany({
        where: {
          empId: Number(req.params.id)
        }
      })
      await prisma.employeePresentAddress.deleteMany({
        where: {
          empId: Number(req.params.id)
        }
      })      
      const {firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail,departmentId,designationId,religionId,bloodGroupId,maritialStatus,genderId,employeePermanentAddress, employeePresentAddress} = req.body;
      console.log("fff", req.body); 
      const results = await prisma.employeeInfo.update({
        where: {
          id: Number(req.params.id)
        },
        data: { 
          firstName,middleName,lastName,fullName,phone,mobileOne,mobileTwo,emergencyMobile,officeEmail,personalEmail,departmentId,designationId,religionId,bloodGroupId,maritialStatus,genderId,
          employeePresentAddress: {
              createMany: {
                data: employeePresentAddress,
              },
            },            
            employeePermanentAddress: {
              createMany: {
                data: employeePermanentAddress,
              },
            } 
        },
        include: {
          employeePresentAddress: true,
          employeePermanentAddress: true,
        }        
      })
      // sendSuccessResponse(200, results, res);
      // res.status(200).json({ message: 'Parent and children inserted successfully', results });
      return results;
    } catch (error) {
      return error;   
      // next(error)
      // sendErrorResponse(500, res, next);
      // console.log("error");
    }finally {
      await prisma.$disconnect;
    }
  }
}