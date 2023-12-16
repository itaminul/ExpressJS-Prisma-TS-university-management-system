import express from 'express';
import { DepartmentSetupController } from '../controller/setup/department/departmentSetupController';
const router = express.Router();
const departmentSetupController = new DepartmentSetupController();
router.route('/').get(departmentSetupController.getAll);
router.route('/').post(departmentSetupController.create);
router.route('/:id').patch(departmentSetupController.update);
router.route('/:id').delete(departmentSetupController.deleteDepartment);
export default router;
