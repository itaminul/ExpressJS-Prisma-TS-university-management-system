import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]; 
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token is missing.' });
  }
  try {
    const decoded = jwt.verify(token, 'JWT_SECRET') as { userId: string }; 
    req.user = decoded.userId; 
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token.' });
  }
};

