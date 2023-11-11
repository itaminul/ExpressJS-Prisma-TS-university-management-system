import { Request, Response, NextFunction } from "express";
import {HttpError} from "./custom-error.model";
function ErrorHandler (
  err: TypeError | HttpError,
  req: Request,
  res: Response,
  next: NextFunction
  ) {
     const errStatus = 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
    next()
}
export default  ErrorHandler;