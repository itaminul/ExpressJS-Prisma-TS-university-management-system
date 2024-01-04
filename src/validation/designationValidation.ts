import { check, ValidationChain } from "express-validator";
export const designationValidator = (): ValidationChain[] => {
  return  [
  check('designationName').notEmpty().withMessage( 'Designation name is required'),
  check('designationDes').notEmpty().withMessage('Designation description is required')
  .isLength({min: 6}).withMessage('Designation description minimum 6 character'),
  check('orgId',).isEmpty().withMessage('Organization is required')
  .isNumeric().withMessage('Organization must be number')  
]
}

export const designationUpdateValidator = (): ValidationChain[] => {
  return  [
  check('designationName').notEmpty().withMessage( 'Designation name is required'),
  check('designationDes').notEmpty().withMessage('Designation description is required')
  .isLength({min: 6}).withMessage('Designation description minimum 6 character'),
  check('orgId',).isEmpty().withMessage('Organization is required')
  .isNumeric().withMessage('Organization must be number')  
]
}