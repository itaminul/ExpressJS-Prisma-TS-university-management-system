import { Request, Response } from "express";
import { DepartmentSetupService } from "../../../services/setup/departmentSetupService";
import { sendErrorResponse, sendSuccessResponse } from "../../../middlware/resposeMiddleware";
const departmentSetupService = new  DepartmentSetupService();
export class DepartmentSetupController {
  getAll = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.getAll();
      const message = 'Request successful';
      sendSuccessResponse(200, results, message, res);
    } catch (error) {
       // Handle errors if necessary
    const errorMessage = 'An error occurred';
    sendErrorResponse(500, errorMessage, res);
    }
  }

  create = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.create();
      const message = 'Created successful';
      sendSuccessResponse(200, results, message, res);
    } catch (error) {
      res.json({ message: error});
    }
  }

  update = async(req: Request, res: Response): Promise<void> => {
    try {     
      const results = await departmentSetupService.update();
      const message = 'Updated successful';
      sendSuccessResponse(200, results, message, res);
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
