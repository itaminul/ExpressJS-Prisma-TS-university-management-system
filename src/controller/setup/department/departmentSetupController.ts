import { Request, Response } from "express";
import { DepartmentSetupService } from "../../../services/setup/departmentSetupService";
const departmentSetupService = new  DepartmentSetupService();
export class DepartmentSetupController {
  getAll = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.getAll();
      res.json({ message: results});
    } catch (error) {
      res.json({ message: error});      
    }
  }

  create = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.create();
      res.json({ message: results});
    } catch (error) {
      res.json({ message: error});
    }
  }

  update = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.update();
      res.json({ message: results});
    } catch (error) {
      res.json({ message: error});
    }
  }

  deleteDepartment = async(req: Request, res: Response): Promise<void> => {
    try {
      const results = await departmentSetupService.deleteDepartment();
      res.json({ message: results});
    } catch (error) {
      res.json({ message: error});
    }
  }
}