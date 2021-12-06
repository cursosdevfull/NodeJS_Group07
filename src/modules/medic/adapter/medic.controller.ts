import UserUseCase from '../application/medic.usecase';
import { Request, Response } from 'express';
import MedicModel from '../domain/medic.model';

export default class MedicController {
  constructor(private useCase: UserUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list({}, ['roles']);
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const id = +req.params.id;
    const user: Partial<MedicModel> = { id };
    const result = await this.useCase.listOne(user);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const page = +req.params.page;
    const result = await this.useCase.listByPage(
      page,
      20,
      {},
      ['roles'],
      {},
      []
    );
    res.json(result);
  }

  async insert(req: Request, res: Response) {
    const body = req.body;
    const medic: MedicModel = {
      name: body.name,
      surname: body.surname,
      lastname: body.lastname,
      email: body.email,
      dni: body.dni,
      cmp: body.cmp,
    };
    const result = await this.useCase.insert(medic);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const id = +params.id;
    const medic: MedicModel = body;

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
