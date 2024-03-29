import { check, ValidationChain } from "express-validator";

export const supplierCreateValidation = (): ValidationChain[] => {
  return[
    check('supplierName').notEmpty().withMessage("Supplier name is required"),
    check('supplierDescription').optional(),
    check('supplierType').notEmpty().withMessage("Supplier type is required"),
    check('orgId').notEmpty().withMessage('Organization is required')
  ]
}

export const supplierUpdateValidation = (): ValidationChain[] => {
  return[
    check('supplierName').notEmpty().withMessage("Supplier name is required"),
    check('supplierDescription').optional(),
    check('supplierType').notEmpty().withMessage("Supplier type is required"),
    check('orgId').notEmpty().withMessage('Organization is required'),
    check('activeStatus').notEmpty().withMessage('Active status is required')
  ]
}