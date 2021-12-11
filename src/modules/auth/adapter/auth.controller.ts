import { Request, response, Response } from 'express';
import UserModel from '../../user/domain/user.model';
import { AuthUseCase } from '../application/auth.usecase';

export class AuthController {
  constructor(private useCase: AuthUseCase) {}

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user: Partial<UserModel> = {
      email,
      password,
    };

    const result = await this.useCase.login(user);
    res.json(result);
  }

  async getNewAccessToken(req: Request, res: Response) {
    const { refreshToken } = req.params;

    const user: Partial<UserModel> = { refreshToken };

    const result = await this.useCase.getNewAccessToken(user);
    if (result) {
      return res.json(result);
    }

    return res.status(401).send('User not found');
  }
}
