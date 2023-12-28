import { NextFunction, Request, Response } from "express";
import { DesignationSetupService } from "../../../services/setup/designationSetupService";
import { sendErrorResponse, sendSuccessResponse } from "../../../middleware/resposeMiddleware";
import { handlePrismaError } from "../../../middleware/prismaErrorHandler";
import { validationResult } from "express-validator";
const designationSetupService = new  DesignationSetupService();
export class DesignationSetupController {
  getAll = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await designationSetupService.getAll();
      sendSuccessResponse(200, results, res);
    } catch (error) {
    sendErrorResponse(500, res, next);
    }
  }

  create = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    try {
      const results = await designationSetupService.create(req, res);
      // console.log("depar controller", results);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }

  update = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    try {     
      const results = await designationSetupService.update(req, res);
      sendSuccessResponse(200, results, res);
    } catch (error) {
       const errorMessage = handlePrismaError(error, req, res, next);
    res.status(400).json({ success: false, error: errorMessage });
      // sendErrorResponse(500, res, next);
    }
  }

  deleteDepartment = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await designationSetupService.deleteDepartment();
      res.json({ message: results});
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }
}
