import RoleModel from '../../role/domain/role.model';
import UserService from '../../user/application/user.service';
import UserModel from '../../user/domain/user.model';
import { AuthRepository } from './auth.repository';
import { Tokens } from './tokens.interface';

export class AuthUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async login(entity: Partial<UserModel>): Promise<Tokens> {
    const user: UserModel = await this.authRepository.login(
      {
        email: entity.email,
      },
      ['roles']
    );

    if (user) {
      const match = await UserService.decryptPassword(
        entity.password,
        user.password
      );

      if (match) {
        const accessToken = UserService.generateAccessToken(
          user.name,
          (user.roles as RoleModel[]).map((role: RoleModel) => role.name)
        );

        return { accessToken, refreshToken: user.refreshToken };
      }

      return null;
    }

    return null;
  }

  async getNewAccessToken(entity: Partial<UserModel>): Promise<Tokens> {
    const user: UserModel = await this.authRepository.getUserByRefreshToken(
      {
        refreshToken: entity.refreshToken,
      },
      ['roles']
    );

    if (user) {
      const accessToken = UserService.generateAccessToken(
        user.name,
        (user.roles as RoleModel[]).map((role: RoleModel) => role.name)
      );
      return { accessToken, refreshToken: user.refreshToken };
    }

    return null;
  }
}
