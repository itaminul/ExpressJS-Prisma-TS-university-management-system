import express from 'express';
const router = express.Router();
import { UserController } from '../controller/auth/userController';
import { userRegisterValidation } from '../validation/userRegisterValidation';
const  userController = new UserController();
router.post('/register', userRegisterValidation(), userController.create);
export default router;