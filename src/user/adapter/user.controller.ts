import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.usecase';
import { UserInfraestructure } from '../infraestructure/user.infraestructure';

const userInfraestructure = new UserInfraestructure();
const userUseCase = new UserUseCase(userInfraestructure);

export class UserController {
  async list(req: Request, res: Response) {
    const listUsers = await userUseCase.list();
    res.json(listUsers);
    // userUseCase.list().then((listUsers) => res.json(listUsers));
  }
}
