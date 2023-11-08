import { NextFunction, Request, Response } from "express";
import { DepartmentSetupService } from "../../../services/setup/departmentSetupService";
import { sendErrorResponse, sendSuccessResponse } from "../../../middlware/resposeMiddleware";
const departmentSetupService = new  DepartmentSetupService();
export class DepartmentSetupController {
  getAll = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await departmentSetupService.getAll();
      sendSuccessResponse(200, results, res);
    } catch (error) {
    sendErrorResponse(500, res, next);
    }
  }

  create = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await departmentSetupService.create(req, res);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }

  update = async(req: Request, res: Response, next: NextFunction, id: number): Promise<void> => {
    try {     
      const results = await departmentSetupService.update(req, res, id);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }

  deleteDepartment = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await departmentSetupService.deleteDepartment();
      res.json({ message: results});
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }
}
