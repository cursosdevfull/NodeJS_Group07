import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { UserModel } from '../domain/user.model';

export interface UserUserCaseInterface extends UseCaseRepository<UserModel> {
  process(): Promise<UserModel>;
}
