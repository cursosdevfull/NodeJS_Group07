import { UserModel } from '../domain/user.model';
import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { AbstractUseCase } from '../../shared/application/abstract-usecase.class';
import { UserUserCaseInterface } from './userusecase.interface';

export class UserUseCase
  extends AbstractUseCase<UserModel>
  implements UserUserCaseInterface
{
  constructor(protected userInfra: UseCaseRepository<UserModel>) {
    super(userInfra);
  }
  process(): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
}
