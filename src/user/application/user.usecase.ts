import { BaseUseCase } from '../../shared/application/base-usecase.class';
import { UserModel } from '../domain/user.model';
import { UserInfraestructureInterface } from './userinfraestructure.interface';
import { UserUseCaseInterface } from './userusecaseinterface';

export class UserUseCase
  extends BaseUseCase<UserModel, UserInfraestructureInterface>
  implements UserUseCaseInterface
{
  constructor(private infraestructure: UserInfraestructureInterface) {
    super(infraestructure);
  }
}
