import express from 'express'
const router = express.Router();
import departmentSetupRoute from '../routes/departmentSetupRoute';
router.use('/departmentSetup', departmentSetupRoute);
module.exports = router;