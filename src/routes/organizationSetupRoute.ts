import express from 'express';
import { OrganizationSetupController } from '../controller/setup/organization/organizationSetupController';
const router = express.Router();
const organizationSetupController = new OrganizationSetupController()
router.route('/').get(organizationSetupController.getAll);
router.route('/').post(organizationSetupController.create);
router.route('/:id').patch(organizationSetupController.update);
router.route('/').delete(organizationSetupController.deleteOrganization);
export default router;
