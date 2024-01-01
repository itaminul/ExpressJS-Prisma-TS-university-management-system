import { NextFunction, Response } from "express";
import { UserService } from "./userService"
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
const secretKey = 'your_secret_key_here'; 
const userService = new UserService();
export class AuthService {

  loginService = async(username: string, password: string, res: Response, next: NextFunction) => {
    try {
      console.log("check");
      const isUserExist = await userService.getUserById(username);
      const user = await userService.getUserById(username);
      console.log("isUserExist", isUserExist);
    if(!isUserExist) {
      res.json({ success: true, "message": "User not found"});
    }
    if(!isUserExist?.username || !bcrypt.compareSync(password,isUserExist?.password)) {
      res.json({ success: true, "message": "Wrong password"});
    }

    const token = jwt.sign(
      {username: isUserExist?.username},
      "JWT_SECRET",
      {
        expiresIn: '1d',
      }
    )

    const userInfo = {
      id: user?.id,
      username: user?.username,
      email: user?.email,
      roleId: user?.roleId,
      orgId: user?.orgId
    }
    
    res.status(200).json({
      status: 200,
      success: true,
      message: 'Login success',
      token: token,
      user: userInfo
    })
    } catch (error) {
     next(error)
    }
  }

    verifyToken = async(token: string): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded);
      });
    });
  }
}