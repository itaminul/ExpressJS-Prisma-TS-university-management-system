import express from 'express';
import { DepartmentSetupController } from '../controller/setup/department/departmentSetupController';
import { departmentUpdateValidator, departmentValidator } from '../validation/departmentValidation';
import { authenticateToken } from '../middleware/authMiddleware';
const router = express.Router();
const departmentSetupController = new DepartmentSetupController();
router.get('/', authenticateToken, departmentSetupController.getAll);
router.post('/', authenticateToken, departmentValidator(), departmentSetupController.create);
router.patch('/:id', departmentUpdateValidator(), departmentSetupController.update )
router.delete('/:id', departmentSetupController.deleteDepartment);
export default router;
