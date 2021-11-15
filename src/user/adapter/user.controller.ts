import { Request, Response } from 'express';
import { generateTrace } from '../../shared/helpers/trace.helper';
import { UserUseCase } from '../application/user.usecase';
import { UserModel } from '../domain/user.model';
import { UserInfraestructure } from '../infraestructure/user.infraestructure';

const userInfraestructure = new UserInfraestructure();

export class UserController {
  userUseCase: UserUseCase;
  constructor() {
    const traceId = generateTrace();
    this.userUseCase = new UserUseCase(userInfraestructure, traceId);
    this.list = this.list.bind(this);
    this.insert = this.insert.bind(this);
  }
  async list(req: Request, res: Response) {
    const listUsers = await this.userUseCase.list();
    res.json(listUsers);
  }

  async insert(req: Request, res: Response) {
    const user: Partial<UserModel> = await res.locals;
    const data = await this.userUseCase.insert(user);
    res.json(data);
  }
}
