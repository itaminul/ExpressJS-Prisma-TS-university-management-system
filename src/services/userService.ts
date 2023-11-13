import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express";
const prisma = new PrismaClient();
export class UserService {
  getAll = async() => {
    try {
      const result = await prisma.user.findMany();
      return result;
    } catch (error) {
      console.log('error', error);
    }finally {
      await prisma.$disconnect;
    }
  }

  getUserById = async(username: string) => {
    try {
      // const [ username ] = req.body;
      const result = await prisma.user.findUnique({
        where: {
          username
        }
      });
      return result;
    } catch (error) {
      console.log('error', error);
    }finally {
      await prisma.$disconnect;
    }
  }

  create = async( res: Response, newUser: { username: string; password: string; email: string, roleId: number, orgId: number }) => {
    try {
   
      const {username, password, email, roleId, orgId} = newUser
      const isUserAllReadyExist = await prisma.user.findFirst({
        where: {
          username
        }
      })

      if(isUserAllReadyExist) {
       res.json({ success: true, "message": "User Already Exist", isUserAllReadyExist });
      }
     
      const results = await prisma.user.create({
        data: {
          username,
          password,
          email,
          roleId,
          orgId
        }
      })
      return results;
    } catch (error) {
      console.log('error', error);
    }finally{
      await prisma.$disconnect;
    }
  }

  update = async(req: Request) => {
    try {
      const {username, password, email} = req.body
      const results = await prisma.user.update({
        where: {
          id: Number(req.params)
        },
        data: {
           username,
          password,
          email
         }
      })
      return results;
    } catch (error) {
      console.log('error', error);
    }finally{
      await prisma.$disconnect;
    }
  }
}