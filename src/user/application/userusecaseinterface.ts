import { BaseUseCaseInterface } from '../../shared/application/base-usecase.interface';
import { UserModel } from '../domain/user.model';

export interface UserUseCaseInterface extends BaseUseCaseInterface<UserModel> {}
