import { Request, Response } from "express";
import { SupplierSetupService } from "../../../services/setup/supplierSetupService";
const supplierService = new SupplierSetupService();
export class SupplierController {
  getAll = async() => {
    try {
      const results = await supplierService.getAll();
      return results;
    } catch (error) {
      console.log("Error", error);
    }
  }
  create = async(req: Request, res: Response) => {
    try {
      const results = await supplierService.create(req, res);
      return results;
    } catch (error) {
      console.log("error", error);
    }
  }
  update = async(req: Request, res: Response) => {
    try {
      const  results = await supplierService.update(req, res);
      return results;
    } catch (error) {
      console.log("error", error);
    }
  }

}