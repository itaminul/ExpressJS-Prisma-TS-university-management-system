import express from 'express'
import departmentSetupRoute from '../routes/departmentSetupRoute';
import organizationRote from '../routes/organizationSetupRoute'
import authRoute from '../routes/authRoute';
import userRoute from '../routes/user'
import employeeRoute from '../routes/employeeRoute';
const router = express.Router();
router.use('/auth', authRoute);
router.use('/user', userRoute)
router.use('/departmentSetup', departmentSetupRoute);
router.use('/organization', organizationRote)
router.use('/employee', employeeRoute)
export default router;
