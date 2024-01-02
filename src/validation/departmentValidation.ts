import { check, ValidationChain } from "express-validator";
export const departmentValidator = (): ValidationChain[] => {
  return  [
  check('departmentName').notEmpty().withMessage('Department is required').trim(),
  check('departmentDescription').isEmpty().withMessage('Department description is required')
  .isLength({min: 6}).withMessage('Department description minimum 6 character'),
  check('orgId').isNumeric().withMessage('Organization must be number')
  .notEmpty().withMessage('Organization is required')
  .isNumeric().withMessage('Organization must be number')  
]
}

export const departmentUpdateValidator = (): ValidationChain[] => {
  return  [
  check('departmentName').notEmpty().withMessage('Department is required').trim(),
  check('departmentDescription').isEmpty().withMessage('Department description is required')
  .isLength({min: 6}).withMessage('Department description minimum 6 character'),
  check('orgId').isNumeric().withMessage('Organization must be number')
  .notEmpty().withMessage('Organization is required')
  .isNumeric().withMessage('Organization must be number')  
]
}