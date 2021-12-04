import UserUseCase from "../application/driver.usecase";
import { Request, Response } from "express";
import DriverModel from "../domain/driver.model";

export default class DriverController {
  constructor(private useCase: UserUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list({}, ["roles"]);
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const id = +req.params.id;
    const driver: Partial<DriverModel> = { id };
    const result = await this.useCase.listOne(driver);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const page = +req.params.page;
    const result = await this.useCase.listByPage(page, 20);
    res.json(result);
  }

  async insert(req: Request, res: Response) {
    const body = req.body;
    const medic: DriverModel = {
      name: body.name,
      surname: body.surname,
      lastname: body.lastname,
    };
    const result = await this.useCase.insert(medic);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const id = +params.id;
    const medic: DriverModel = body;

    const result = await this.useCase.update(medic, { id });
    res.json(result);
  }

  async remove(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const result = await this.useCase.remove({ id });
    res.json(result);
  }
}
