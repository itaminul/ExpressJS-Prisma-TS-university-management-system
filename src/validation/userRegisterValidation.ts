import { ValidationChain, check } from "express-validator";

export const userRegisterValidation = (): ValidationChain[] => {
  return[
    check('username').notEmpty().withMessage('User name is required')
    .isLength({ min: 6}).withMessage('User name minimum 6 character')
    .isLength({ max:50}).withMessage('User name maximum 50 character'),
    check('password').notEmpty().withMessage('Password is required')
    .isLength({ min: 6}).withMessage('Password length minimum 6 character'),
    check('email').notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Provide valied email address'),
    check('roleId').notEmpty().withMessage('Role id is required')
    .isNumeric().withMessage('Role id must me number'),
    check('orgId').notEmpty().withMessage('Organation id is required')
    .isNumeric().withMessage('Organatoin must me numeric')
  ]
}