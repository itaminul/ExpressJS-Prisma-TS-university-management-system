import { Request, Response, NextFunction } from "express";
import { BoardService } from "../../services/boardService";
import { sendErrorResponse, sendSuccessResponse } from "../../middleware/resposeMiddleware";

const boardService = new BoardService();
export class BoardController {
  getall = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await boardService.getAll();
      sendSuccessResponse(200, result, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }  
  }
  create = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await boardService.create(req, res, next);
      sendSuccessResponse(200, result, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }

  update = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await boardService.update(req, res, next);
      sendSuccessResponse(200, result, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }
}