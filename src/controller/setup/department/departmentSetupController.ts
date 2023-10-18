import { Request, Response } from "express";
exports.getAll = async(req: Request, res: Response) => {
  try {
    res.send({ success: "true", "message": "Show successfully"})
    
  } catch (error) {
    return 'error';
  }
};