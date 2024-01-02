import { ValidationChain, body } from "express-validator";

export const employeeCreateValidation = (): ValidationChain[] => {
  return[
    body()
  ]

}

/*
  firstName                String?
  middleName               String
  lastName                 String
  fullName                 String
  phone                    String?
  mobileOne                String?
  mobileTwo                String?
  emergencyMobile          String?
  officeEmail              String?
  personalEmail            String?
  empImage                 String?
  empSignature             String?
  nationalId               Int?
*/