import { NextFunction, Request, Response } from "express";
import { AuthService } from "../../services/authService";
import { UserLogin } from "./userLoginType";
const authService = new AuthService();
export class Authentication {
  /**
   * Handle user login
   * @param {Request} req
   * @param { Response} res
   * @returns
  */
  userLogin = async(req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { username, password }: UserLogin = req.body;
    try {
      const session = req.session;
      res.json({ message: session});
      // const error = validationResult
      const results = await authService.loginService(username, password, res, next);
      res.json({ message: results});
    } catch (error) {
      res.json({ message: error});
      
    }
  }
}