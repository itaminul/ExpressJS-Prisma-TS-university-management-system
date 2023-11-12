import { Request, Response } from "express";
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
  userLogin = async(req: Request, res: Response):Promise<void> => {
    const { username, password }: UserLogin = req.body;
    try {
      // const error = validationResult
      const results = await authService.loginService();
      res.json({ message: results});
    } catch (error) {
      res.json({ message: error});
      
    }
  }
}