import express from 'express';
const router = express.Router();
import { Authentication } from '../controller/auth/authController';
const authentication = new Authentication();
router.route('/').get(authentication.userLogin);
router.route('/register').post(authentication.userLogin)

export default router;