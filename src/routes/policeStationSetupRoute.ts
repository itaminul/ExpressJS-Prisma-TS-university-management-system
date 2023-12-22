import express from 'express';
import { PoliceStationSetupController } from '../controller/setup/policeStation/policeStationSetupController';
const router = express.Router();
const policeStationSetupController = new PoliceStationSetupController();
router.route('/').get(policeStationSetupController.getAll);
router.route('/').post(policeStationSetupController.create);
router.route('/:id').patch(policeStationSetupController.update);
router.route('/').delete(policeStationSetupController.deletePoliceStation);
export default router;
