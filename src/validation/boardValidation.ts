import { ValidationChain, body } from "express-validator"

export const boardCreateValidation = (): ValidationChain[] => {
  return[
    body('boardName','Board Name is not null').exists().notEmpty(),
    body('boardDes','Board Description max length 150 and min length 6').exists().isLength({ min: 6, max: 1500}),
    body('serialNo','Serial No minimum 1 length').isLength({ min:1}),
    body('activeStatus', 'Must be true or false').isBoolean()
  ]
}

export const boardUpdateValidation = (): ValidationChain[] => {
  return[
    body('boardName','Board Name is not null').exists().notEmpty(),
    body('boardDes','Board Description max length 150 and min length 6').exists().isLength({ min: 6, max: 1500}),
    body('serialNo','Serial No minimum 1 length').isLength({ min:1}),
    body('activeStatus', 'Must be true or false').isBoolean()
  ]
}
