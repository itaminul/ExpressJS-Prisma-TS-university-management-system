import { NextFunction, Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../middleware/resposeMiddleware';
import { UserService } from '../../services/userService';
const userService = new UserService();
export class UserController {
  getUsers = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await userService.getAll();
      sendSuccessResponse(200, results, res);
    } catch (error) {
       sendErrorResponse(500, res, next);
    }
  }

  create = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await userService.create(req);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);      
    }
  }

  update = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await userService.update(req);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }
}