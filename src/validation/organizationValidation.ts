import { body, ValidationChain } from "express-validator";
export const organizationCreateValidator = (): ValidationChain[] => {
  return  [
  body('orgName', 'Organization Name does not empty').exists().notEmpty(),
  body('orgDescription','Designation description does not empty and minimum 6 character').not().isEmpty().isLength({min: 6}),
  body('orgId','Organization does not empty and must be number').not().isEmpty().isNumeric()  
]
}

export const organizationUpdateValidator = (): ValidationChain[] => {
  return  [
  body('orgName', 'Organization Name does not empty').exists().notEmpty(),
  body('orgDescription','Organization description does not empty and minimum 6 character').not().isEmpty().isLength({min: 6}),
  body('orgId','Organization does not empty and must be number').not().isEmpty().isNumeric(),
  body('activeStatus','Active Status does not empty and must be boolean').not().isEmpty().isBoolean()  
]
}