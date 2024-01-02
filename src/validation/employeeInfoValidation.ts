import { ValidationChain, body } from "express-validator";

export const employeeCreateValidation = (): ValidationChain[] => {
  return[
    body('firstName','First name max length 120').exists().isEmpty().isLength({ max: 150}),
    body('phone', 'Phone number not null and not greater then 13 character').exists().notEmpty().isLength({ max: 13}),
    body('middleName', 'Middle name not null and max length 50').notEmpty().isLength({ max: 50}),
    body('lastName', 'Last name not null and max length 50').notEmpty().isLength({ max: 50}),
    body('fullName', 'Full name not null and max length 100').notEmpty().isLength({max: 100}),
    body('mobileOne', 'Mobile one is not null and max length 13').notEmpty().isLength({max: 13}),
    body('mobileTwo', 'Mobile two is not null and max length 13').notEmpty().isLength({max: 13}),
    body('emergencyMobile', 'Emergency mobile is not null and max length 13').notEmpty().isLength({max: 13}),
    body('officeEmail', 'Office mail').isEmail().notEmpty().isLength({max: 100}),
    body('personalEmail', 'Personal mail is not null').isEmail().notEmpty().isLength({max: 100}),
    body('empImage', 'empImage').isEmpty(),
    body('empSignature', 'empSignature').isEmpty(),
    body('nationalId', 'National Id').isEmpty().isLength({max: 13}),
  ]

}

export const employeeUpdateValidation = (): ValidationChain[] => {
  return[
    body('firstName','First name max length 120').exists().isEmpty().isLength({ max: 150}),
    body('phone', 'Phone number not null and not greater then 13 character').exists().notEmpty().isLength({ max: 13}),
    body('middleName', 'Middle name not null and max length 50').notEmpty().isLength({ max: 50}),
    body('lastName', 'Last name not null and max length 50').notEmpty().isLength({ max: 50}),
    body('fullName', 'Full name not null and max length 100').notEmpty().isLength({max: 100}),
    body('mobileOne', 'Mobile one is not null and max length 13').notEmpty().isLength({max: 13}),
    body('mobileTwo', 'Mobile two is not null and max length 13').notEmpty().isLength({max: 13}),
    body('emergencyMobile', 'Emergency mobile is not null and max length 13').notEmpty().isLength({max: 13}),
    body('officeEmail', 'Office mail').isEmail().notEmpty().isLength({max: 100}),
    body('personalEmail', 'Personal mail is not null').isEmail().notEmpty().isLength({max: 100}),
    body('empImage', 'empImage').isEmpty(),
    body('empSignature', 'empSignature').isEmpty(),
    body('nationalId', 'National Id').isEmpty().isLength({max: 13}),
  ]

}

