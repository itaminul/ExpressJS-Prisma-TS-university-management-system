import express from 'express';
const router = express.Router();
import { UserController } from '../controller/auth/userController';
const  userController = new UserController();
router.route('/register').get(userController.create);
export default router;