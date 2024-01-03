import { check, ValidationChain } from 'express-validator'
export const policeStationCreateValidation = (): ValidationChain[] => {
  return[
    check('thanaName').exists().withMessage('Already exist')
    .isEmpty().withMessage('Thana name not null'),
    check('thanaDes').exists().withMessage('Already Exist')
    .optional().isLength({ min:6}).withMessage('Thana description minimum 6 character'),
    check('serialNo').isInt().withMessage('Serial number must be number')
  ]
}

export const policeStationUpdateValidation = (): ValidationChain[] => {
  return[
    check('thanaName').exists().withMessage('Already exist')
    .isEmpty().withMessage('Thana name not null'),
    check('thanaDes').exists().withMessage('Already Exist')
    .optional().isLength({ min:6}).withMessage('Thana description minimum 6 character'),
    check('serialNo').isInt().withMessage('Serial number must be number'),
    check('activeStatus').isBoolean().withMessage('Active status is boolean')
    .notEmpty().withMessage('Active status not null')
  ]
}