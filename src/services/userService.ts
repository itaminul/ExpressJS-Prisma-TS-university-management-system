import { PrismaClient } from "@prisma/client"
import { Request } from "express";
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

  create = async(req: Request, res: Response) => {
    try {
      const {username, password, email, roleId, orgId} = req.body
      const findUser = await prisma.user.findFirst({
        where: {
          username
        }
      })

      if(findUser) {
        res.json({ success: true, "message": "User Already Exist", findUser });
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