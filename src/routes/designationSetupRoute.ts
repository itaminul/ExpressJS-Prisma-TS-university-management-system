import express from 'express';
import { DesignationSetupController } from '../controller/setup/designation/designationSetupController';
const router = express.Router();
const designationSetupController = new DesignationSetupController();
router.route('/').get(designationSetupController.getAll);
router.route('/').post(designationSetupController.create);
router.route('/:id').patch(designationSetupController.update);
router.route('/').delete(designationSetupController.deleteDepartment);
export default router;
