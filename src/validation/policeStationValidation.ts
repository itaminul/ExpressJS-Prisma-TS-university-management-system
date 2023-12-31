import { body, ValidationChain } from 'express-validator'
export const policeStationCreateValidation = (): ValidationChain[] => {
  return[
    body('thanaName','Thana name not null').exists().isEmpty(),
    body('thanaDes','Thana description is not null').exists().optional().isLength({ min:6}),
    body('serialNo','Serial number must be number').isInt()
  ]
}

export const policeStationUpdateValidation = (): ValidationChain[] => {
  return[
    body('thanaName','Thana name not null').exists().isEmpty(),
    body('thanaDes','Thana description is not null').exists().optional().isLength({ min:6}),
    body('serialNo','Serial number must be number').isInt(),
    body('activeStatus','Active status not null and is boolean').isBoolean()
  ]
}