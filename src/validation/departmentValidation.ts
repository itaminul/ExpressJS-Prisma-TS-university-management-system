import { body, ValidationChain } from "express-validator";
export const departmentValidator = (): ValidationChain[] => {
  return  [
  body('departmentName', 'Department does not empty').exists().notEmpty(),
  body('departmentDescription','Department description does not empty and minimum 6 character').not().isEmpty().isLength({min: 6}),
  body('orgId','Organization does not empty and must be number').not().isEmpty().isNumeric()  
]
}

export const departmentUpdateValidator = (): ValidationChain[] => {
  return  [
  body('departmentName', 'Department does not empty').exists().notEmpty(),
  body('departmentDescription','Department description does not empty and minimum 6 character').not().isEmpty().isLength({min: 6}),
  body('orgId','Organization does not empty and must be number').not().isEmpty().isNumeric(),
  body('activeStatus','Active Status does not empty and must be boolean').not().isEmpty().isBoolean()  
]
}