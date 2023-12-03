import express from 'express';
import { EmployeeController } from '../controller/employee/employeeController';
const employeeController = new EmployeeController();
const router = express.Router();
router.route('/').get(employeeController.getAll);
router.route('/').post(employeeController.create);
router.route('/:id').patch(employeeController.update);
export default router;
