import { NextFunction, Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../middleware/resposeMiddleware';
import { UserService } from '../../services/userService';
import { Jwt } from 'jsonwebtoken';
import bcrypt  from 'bcrypt'
const userService = new UserService();
export class UserController {
  getUsers = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await userService.getAll();
      sendSuccessResponse(200, results, res);
    } catch (error) {
       sendErrorResponse(500, res, next);
    }
  }

  create = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const [username, password, email, roleId, orgId] = req.body;
      const userExist = await userService.getUserById(username);
      if(userExist) {
        return res.status(400).json({ error: 'Username already exists'});
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = {
        username,
        email,
        roleId, 
        orgId,
        password: hashedPassword
      }
      const results = await userService.create(res,newUser);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);      
    }
  }

  update = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await userService.update(req);
      sendSuccessResponse(200, results, res);
    } catch (error) {
      sendErrorResponse(500, res, next);
    }
  }
}