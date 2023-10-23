import { Request, Response } from "express";
import { AuthService } from "../../services/authService";
const authService = new AuthService();
export class Authentication {
  userLogin = async(req: Request, res: Response):Promise<void> => {
    try {
      const results = await authService.loginService();
      res.json({ message: results});
    } catch (error) {
      res.json({ message: error});
      
    }
  }
}