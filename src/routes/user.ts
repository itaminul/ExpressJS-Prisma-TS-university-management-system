import express from 'express';
const router = express.Router();
import { UserController } from '../controller/auth/userController';
const  userController = new UserController();
router.route('/register').post(userController.create);
export default router;