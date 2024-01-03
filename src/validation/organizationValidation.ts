import { check, ValidationChain } from "express-validator";
export const organizationCreateValidator = (): ValidationChain[] => {
  return  [
  check('orgName').exists().withMessage('Organization Name already exist')
  .notEmpty().withMessage('Organization Name is required'),
  check('orgDescription').notEmpty().withMessage('Designation description is required')
  .isLength({min: 6}).withMessage('Designation description minimum 6 character'),
  check('orgId').notEmpty().withMessage('Organization is required')
  .isNumeric().withMessage('Organization must be number')  
]
}

export const organizationUpdateValidator = (): ValidationChain[] => {
  return  [
    check('orgName').exists().withMessage('Organization Name already exist')
    .notEmpty().withMessage('Organization Name is required'),
    check('orgDescription').notEmpty().withMessage('Designation description is required')
    .isLength({min: 6}).withMessage('Designation description minimum 6 character'),
    check('orgId').notEmpty().withMessage('Organization is required')
    .isNumeric().withMessage('Organization must be number'),  
    check('activeStatus').notEmpty().withMessage('Active Status is required')
    .isBoolean().withMessage('Active Status must be boolean')  
]
}