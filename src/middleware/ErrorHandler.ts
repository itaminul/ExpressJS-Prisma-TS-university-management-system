// middlewares/errorHandler.ts

import { NextFunction, Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const prisma = new PrismaClient();

const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  // Handle Prisma errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Log the Prisma error for debugging purposes
    console.error(err.message);

    // Use environment variables in the response
    return res.status(400).json({
      error: 'Prisma Client Error',
      databaseUrl: process.env.DATABASE_URL,
    });
  }

  // Handle other errors
  // Log the error for debugging purposes
  console.error(err.message);

  res.status(500).json({
    error: 'Internal Server Error',
    databaseUrl: process.env.DATABASE_URL,
  });
};

export default errorHandler;
