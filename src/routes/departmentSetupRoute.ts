import express from 'express';
import { DepartmentSetupController } from '../controller/setup/department/departmentSetupController';
const router = express.Router();
const departmentSetupController = new DepartmentSetupController();
router.route('/').get(departmentSetupController.getDepartmentData);
export default router;
