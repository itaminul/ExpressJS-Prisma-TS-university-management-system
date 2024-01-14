import express from 'express'
import departmentSetupRoute from '../routes/departmentSetupRoute';
import organizationRote from '../routes/organizationSetupRoute'
import authRoute from '../routes/authRoute';
import userRoute from '../routes/user'
import employeeRoute from '../routes/employeeRoute';
import designationSetupRoute from '../routes/designationSetupRoute'
import policeStationSetupRoute from '../routes/policeStationSetupRoute'
import supplierSetupRoute from '../routes/supplierSetupRoute'
const router = express.Router();
router.use('/auth', authRoute);
router.use('/user', userRoute)
router.use('/departmentSetup', departmentSetupRoute);
router.use('/designationSetup', designationSetupRoute);
router.use('/organization', organizationRote)
router.use('/employee', employeeRoute)
router.use('/policeStation', policeStationSetupRoute)
router.use('/supplierSetup', supplierSetupRoute)
export default router;
