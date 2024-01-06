import { ValidationChain, body, check } from "express-validator";

export const employeeCreateValidation = (): ValidationChain[] => {
  return[
    check('firstName').optional().isLength({ max: 150}).withMessage('First name max length 120'),
    check('phone').notEmpty().withMessage('Phone number is required').isLength({ max: 13}).withMessage('Phone number not greater then 13 character'),
    check('middleName').notEmpty().withMessage('Middle name is required').isLength({ max: 50}).withMessage('Middle name max length 50'),
    check('lastName').notEmpty().withMessage( 'Last name is required').isLength({ max: 50}).withMessage( 'Last name max length 50'),
    check('fullName').notEmpty().withMessage( 'Full name is required').isLength({max: 100}).withMessage( 'Full name max length 100'),
    check('mobileOne').notEmpty().withMessage( 'Mobile one is required').isLength({max: 13}).withMessage( 'Mobile one is max length 13'),
    check('mobileTwo').notEmpty().withMessage('Mobile two is required').isLength({max: 13}).withMessage('Mobile two is max length 13'),
    check('emergencyMobile').notEmpty().withMessage('Emergency mobile is required').isLength({max: 13}).withMessage('Emergency mobile is max length 13'),
    check('officeEmail').isEmail().withMessage('Email address is in valid').notEmpty().withMessage('Email address is reqired').isLength({max: 100}).withMessage('Email address not greater than 100'),
    check('personalEmail').isEmail().withMessage('Email address is not valied').notEmpty().withMessage( 'Personal mail is required').isLength({max: 100}).withMessage( 'Personal mail is not greater than 100 character'),
    check('empImage').optional(),
    check('empSignature').optional(),
    check('nationalId').optional().isLength({max: 13}).withMessage('Max length not greater than 13 digit'),
  ]

}


