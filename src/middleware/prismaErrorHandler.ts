
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Request, Response, NextFunction } from 'express';

export function handlePrismaError(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof PrismaClientKnownRequestError) {
    const prismaError = err as PrismaClientKnownRequestError;
    let errorMessage = 'Internal Server Error';

    switch (prismaError.code) {
      case 'P2002':
        errorMessage = 'Duplicate entry error: This record already exists.';
        break;
      case 'P2003':
        errorMessage = 'Related record not found.';
        break;
      case 'P2025':
        errorMessage = 'Record not found.';
        break;
      // Handle other specific Prisma error codes as needed
    }

    res.status(400).json({ success: false, error: errorMessage });
  } else {
    next('pppppppppppppppp');
  }
}
