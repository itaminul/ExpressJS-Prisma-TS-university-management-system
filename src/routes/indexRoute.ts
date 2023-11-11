import express from 'express'
import departmentSetupRoute from '../routes/departmentSetupRoute';
import authRoute from '../routes/authRoute';
const router = express.Router();
router.use('/auth', authRoute);
router.use('/departmentSetup', departmentSetupRoute);
export default router;
