import { Request, Response } from "express";
import { DepartmentSetupService } from "../../../services/setup/departmentSetupService";
import { sendErrorResponse, sendSuccessResponse } from "../../../middlware/resposeMiddleware";
const departmentSetupService = new  DepartmentSetupService();
export class DepartmentSetupController {
  getAll = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.getAll();
      sendSuccessResponse(200, results, res);
    } catch (error) {
       // Handle errors if necessary
    sendErrorResponse(500, res);
    }
  }

  create = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.create();
      sendSuccessResponse(200, results, res);
    } catch (error) {
      res.json({ message: error});
    }
  }

  update = async(req: Request, res: Response): Promise<void> => {
    try {     
      const results = await departmentSetupService.update();
      sendSuccessResponse(200, results, res);
    } catch (error) {
      res.json({ message: error});
    }
  }

  deleteDepartment = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.deleteDepartment();
      res.json({ message: results});
    } catch (error) {
      res.json({ message: error});
    }
  }
}
