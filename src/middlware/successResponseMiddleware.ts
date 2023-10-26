import { Request, Response, NextFunction } from 'express';

interface CustomResponse {
  success: boolean;
  status: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export function successResponseMiddleware(data: any, statusCode: number = 200, message: string = 'Request successful') {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (req: Request, res: Response, next: NextFunction) => {
    const successResponse: CustomResponse = {
      success: true,
      status: statusCode,
      message: message,
      data: data,
    };
    res.status(statusCode).json(successResponse);
  };
}
