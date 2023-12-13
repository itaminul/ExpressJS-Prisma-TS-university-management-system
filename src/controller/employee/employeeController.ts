import { NextFunction, Request, Response } from "express";
import { EmployeeService } from "../../services/employeeService";
import { sendErrorResponse, sendSuccessResponse } from "../../middleware/resposeMiddleware";
const empService = new EmployeeService();
export class EmployeeController {
  getAll = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await empService.getAll();
      sendSuccessResponse(200, results, res);
    } catch (error) {
    sendErrorResponse(500, res, next);
    }
  }

  create = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results = await empService.create(req, res, next);
     return results;
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }

  update = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {     
      const results = await empService.update(req, res, next);

      // return results;
      // return results;
       sendSuccessResponse(200, results, res);
      // res.status(200).json({ message: 'Parent and children inserted successfully', results });
    } catch (error) {
      console.log("error", error);
      //  const errorMessage = handlePrismaError(error, req, res, next);
    // res.status(400).json({ success: false, error: errorMessage });
      // sendErrorResponse(500, res, next);
    }
  }
}
