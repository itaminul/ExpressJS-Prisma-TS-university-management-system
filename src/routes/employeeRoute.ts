import express from 'express';
import { EmployeeController } from '../controller/employee/employeeController';
import { employeeCreateValidation } from '../validation/employeeInfoValidation';
const employeeController = new EmployeeController();
const router = express.Router();
router.get('/',employeeController.getAll);
router.post('/', employeeCreateValidation(),employeeController.create);
router.patch('/:id',employeeController.update);
export default router;
