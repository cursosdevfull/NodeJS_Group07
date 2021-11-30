import RoleUseCase from "../application/role.usecase";
import { Request, Response } from "express";
import RoleModel from "../domain/role.model";

export default class RoleController {
  constructor(private useCase: RoleUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list({});
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const id = +req.params.id;
    const role: Partial<RoleModel> = { id };
    const result = await this.useCase.listOne(role);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const page = +req.params.page;
    const result = await this.useCase.listByPage(page, 20);
    res.json(result);
  }

  async insert(req: Request, res: Response) {
    const body = req.body;
    const role: RoleModel = {
      name: body.name,
    };
    const result = await this.useCase.insert(role);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const id = +params.id;
    const role: RoleModel = body;

    const result = await this.useCase.update(role, { id });
    res.json(result);
  }

  async remove(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const result = await this.useCase.remove({ id });
    res.json(result);
  }
}
