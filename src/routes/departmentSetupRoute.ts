import express from 'express';
import { DepartmentSetupController } from '../controller/setup/department/departmentSetupController';
const router = express.Router();
const departmentSetupController = new DepartmentSetupController();
router.route('/').get(departmentSetupController.getAll);
router.route('/').post(departmentSetupController.create);
router.route('/').patch(departmentSetupController.update);
router.route('/').delete(departmentSetupController.deleteDepartment);
export default router;
