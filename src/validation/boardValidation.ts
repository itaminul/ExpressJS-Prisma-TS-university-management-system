import { ValidationChain, check } from "express-validator"

export const boardCreateValidation = (): ValidationChain[] => {
  return[
    check('boardName').exists().withMessage('Board Name already exist')
    .notEmpty().withMessage('Board Name is required'),
    check('boardDes').isLength({ min: 6, max: 1500}).withMessage('Board Description max length 150 and min length 6'),
    check('serialNo').isLength({ min:1}).withMessage('Serial No minimum 1 length'),
    check('activeStatus').isBoolean().withMessage('Must be true or false')
  ]
}

export const boardUpdateValidation = (): ValidationChain[] => {
  return[
    check('boardName').exists().withMessage('Board Name already exist')
    .notEmpty().withMessage('Board Name is required'),
    check('boardDes').isLength({ min: 6, max: 1500}).withMessage('Board Description max length 150 and min length 6'),
    check('serialNo').isLength({ min:1}).withMessage('Serial No minimum 1 length'),
    check('activeStatus').isBoolean().withMessage('Must be true or false'),
    check('activeStatus').isBoolean().withMessage('Must be true or false')
  ]
}
