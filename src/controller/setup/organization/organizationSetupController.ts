import { NextFunction, Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../../../middleware/resposeMiddleware";
import { handlePrismaError } from "../../../middleware/prismaErrorHandler";
import { OrganizationSetupService } from "../../../services/setup/organizationSetupService";
const organizationSetupService = new  OrganizationSetupService
export class OrganizationSetupController {
  getAll = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await organizationSetupService.getAll();
      sendSuccessResponse(200, results, res);
    } catch (error) {
    sendErrorResponse(500, res, next);
    }
  }

  create = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await organizationSetupService.create(req, res);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }

  update = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {     
      const results = await organizationSetupService.update(req, res, next);
       res.json({ success: true, "message": "Update successfully", results})  
      // return results;
      // sendSuccessResponse(200, results, res);
    } catch (error) {
       const errorMessage = handlePrismaError(error, req, res, next);
       res.status(400).json({ success: false, error: errorMessage });
      // sendErrorResponse(500, res, next);
    }
  }

  deleteOrganization = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await organizationSetupService.deleteDepartment();
      res.json({ message: results});
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }
}
