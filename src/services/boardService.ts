import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();
export class BoardService {
  getAll = async() => {
    try {
      const result = await prisma.board.findMany();
      return result;
    } catch (error) {
      console.log("error", error);
    }
  }

  create = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const { boardName,boardDes,orgId,serialNo } = req.body;
      const result = await prisma.board.create({
        data: {
           boardName,boardDes,orgId,serialNo
        }
      })
      return result;
    } catch (error) {
      console.log("error", error);
    }
  }

  update = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const { boardName,boardDes,orgId,serialNo, activeStatus} = req.body;
      const result = await prisma.board.update({
        where:{
          id: Number(req.params.id);
        },
        data: {
           boardName,boardDes,orgId,serialNo, activeStatus
        }
      })
      return result;
    } catch (error) {
      console.log("error", error);
    }
  }

  deleteBoard = async(req: Request) => {
    try {
      const result = await prisma.board.delete({
        where:{
          id: Number(req.params.id)
        }
      })
      return result;
    } catch (error) {
      console.log("error", error);
    }
  }

}