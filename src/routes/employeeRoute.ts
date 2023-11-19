import express from 'express';
import { EmployeeController } from '../controller/employeeController';
const router = express.Router();
const employeeController = new EmployeeController();
router.route('/').get(employeeController.getAll);
router.route('/').post(employeeController.create);
router.route('/:id').patch(employeeController.update);
router.route('/').delete(employeeController.deleteDepartment);
export default router;
