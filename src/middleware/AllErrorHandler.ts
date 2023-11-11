
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Request, Response, NextFunction } from 'express';

export function handlePrismaError(err: any, req: Request, res: Response, next: NextFunction) {
   if (err instanceof PrismaClientKnownRequestError) {
    const prismaError = err as PrismaClientKnownRequestError;
    let errorMessage = 'Internal Server Error';

    if (prismaError.code === 'P2002') {
      errorMessage = 'Duplicate entry error. This record already exists.';
    } else if (prismaError.code === '409')
     {
      errorMessage = 'Duplicate entry error. This record already exists.';
    } else if (prismaError.code === 'P2025') {
      errorMessage = 'Record not found.';
    }

    res.status(400).json({ success: false, error: errorMessage });
  } else {
    next(err);
  }
}
