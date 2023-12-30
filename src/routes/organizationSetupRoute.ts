import express from 'express';
import { OrganizationSetupController } from '../controller/setup/organization/organizationSetupController';
import { organizationCreateValidator, organizationUpdateValidator } from '../validation/organizationValidation';
const router = express.Router();
const organizationSetupController = new OrganizationSetupController()
router.route('/').get(organizationSetupController.getAll);
router.post('/', organizationCreateValidator(), organizationSetupController.create);
router.patch('/:id', organizationUpdateValidator(), organizationSetupController.update);
router.route('/').delete(organizationSetupController.deleteOrganization);
export default router;
