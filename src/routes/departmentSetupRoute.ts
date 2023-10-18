import express from 'express';
const router = express.Router();
const { getAll } = require('../controller/setup/department/departmentSetupController')
router.route('/').get(getAll);
module.exports = router;
