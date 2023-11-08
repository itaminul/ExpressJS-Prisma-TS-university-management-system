import { Response, NextFunction } from 'express';

// Interface for the response format
interface CustomResponse {
  success: boolean;
  status: number;
  results?: any;
}


export function sendSuccessResponse(statusCode: number, data: unknown, res: Response) {
  const response: CustomResponse = {
    success: true,
    status: statusCode,
    results: data
  };
  res.status(statusCode).json(response);
}

// Middleware function for sending error responses
export function sendErrorResponse(statusCode: number,res: Response,  next: NextFunction) {
  const response: CustomResponse = {
    success: false,
    status: statusCode
  };
  res.status(statusCode).json(response);
  next();
}
