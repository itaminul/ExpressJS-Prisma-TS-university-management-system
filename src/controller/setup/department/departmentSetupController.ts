import { Request, Response } from "express";
import { DepartmentSetupService } from "../../../services/setup/departmentSetupService";
const departmentSetupService = new  DepartmentSetupService();
export class DepartmentSetupController {
  getDepartmentData = async(req: Request, res: Response): Promise<void> => {
    const results = await departmentSetupService.getDepartmentSetupData();
    res.json({ message: results});
  }

}