import express from 'express'
const router = express.Router();
const departmentSetupRoute = require('../routes/departmentSetupRoute');
router.use('/departmentSetup', departmentSetupRoute);
module.exports = router;