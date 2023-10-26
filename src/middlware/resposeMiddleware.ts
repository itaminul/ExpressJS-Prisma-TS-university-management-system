import { Response } from 'express';

// Interface for the response format
interface CustomResponse {
  success: boolean;
  status: number;
  message: string;
  data?: any;
  res: string;
}

// Middleware function for sending success responses
export function sendSuccessResponse(statusCode: number, data: unknown, message: string, res: Response) {
  const response: CustomResponse = {
    success: true,
    status: statusCode,
    message: message,
    data: data,
    res: ''
  };
  res.status(statusCode).json(response);
}

// Middleware function for sending error responses
export function sendErrorResponse(statusCode: number, message: string, res: Response) {
  const response: CustomResponse = {
    success: false,
    status: statusCode,
    message: message,
    res: ''
  };
  res.status(statusCode).json(response);
}
