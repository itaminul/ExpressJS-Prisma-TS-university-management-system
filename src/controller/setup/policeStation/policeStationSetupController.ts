import { NextFunction, Request, Response } from "express";
import { PoliceStationSetupService } from "../../../services/setup/policeStationSetupService";
import { sendErrorResponse, sendSuccessResponse } from "../../../middleware/resposeMiddleware";
import { handlePrismaError } from "../../../middleware/prismaErrorHandler";
const policeStationSetupService = new  PoliceStationSetupService();
export class PoliceStationSetupController {
  getAll = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await policeStationSetupService.getAll();
      sendSuccessResponse(200, results, res);
    } catch (error) {
    sendErrorResponse(500, res, next);
    }
  }

  create = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await policeStationSetupService.create(req, res);
      // console.log("depar controller", results);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }

  update = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {     
      const results = await policeStationSetupService.update(req, res);
      sendSuccessResponse(200, results, res);
    } catch (error) {
       const errorMessage = handlePrismaError(error, req, res, next);
    res.status(400).json({ success: false, error: errorMessage });
      // sendErrorResponse(500, res, next);
    }
  }

  deleteDepartment = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await policeStationSetupService.deleteDepartment();
      res.json({ message: results});
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }
}
