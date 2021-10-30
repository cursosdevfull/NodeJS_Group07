import { UserInfraestructureInterface } from '../application/userinfraestructure.interface';
import { UserModel } from '../domain/user.model';
import { BaseInfraestructure } from '../../shared/infraestructure/baseinfraestructure';
import mockUsers from '../../mocks/users.json';

export class UserInfraestructure
  extends BaseInfraestructure<UserModel>
  implements UserInfraestructureInterface
{
  override list(): Promise<UserModel[]> {
    return Promise.resolve(mockUsers);
  }
}
