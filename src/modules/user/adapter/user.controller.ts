import UserUseCase from '../application/user.usecase';
import { Request, Response } from 'express';
import UserModel from '../domain/user.model';
import RedisBootstrap from '../../../bootstrap/redis.bootstrap';
import Logger from '../../../helpers/logger.helper';

export default class UserController {
  constructor(private useCase: UserUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list({}, ['roles']);
    Logger.info('Ejecución desde MySQL');
    RedisBootstrap.set(res.locals.cacheKey, JSON.stringify(result));

    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const id = +req.params.id;
    const user: Partial<UserModel> = { id };
    const result = await this.useCase.listOne(user);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const page = +req.params.page;
    const result = await this.useCase.listByPage(page, 20, {}, ['roles'], {}, [
      'password',
      'refreshToken',
    ]);
    res.json(result);
  }

  async insert(req: Request, res: Response) {
    const body = req.body;
    const user: UserModel = {
      name: body.name,
      email: body.email,
      photo: body.photo,
      password: body.password,
      roles: body.roles.map((role: string) => +role),
    };
    const result = await this.useCase.insert(user);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const id = +params.id;
    const user: UserModel = body;
    user.roles = body.roles.map((role: string) => +role);

    const result = await this.useCase.update(user, { id });
    res.json(result);
  }

  async remove(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const result = await this.useCase.remove({ id });
    res.json(result);
  }
}
