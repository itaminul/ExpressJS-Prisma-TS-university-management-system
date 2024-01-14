import express from 'express'
import { SupplierController } from "../controller/setup/suppliers/supplierSetupController";
import { authenticateToken } from '../middleware/authMiddleware';
import { supplierCreateValidation, supplierUpdateValidation } from '../validation/supplierValidation';

const supplierController = new SupplierController();
const router = express.Router();
router.get('/', authenticateToken,supplierController.getAll);
router.post('/', authenticateToken, supplierCreateValidation(), supplierController.create);
router.patch('/:id', authenticateToken, supplierUpdateValidation(), supplierController.update);
export default router;