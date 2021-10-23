import { UserInfraestructureInterface } from '../application/userinfraestructure.interface';
import { UserModel } from '../domain/user.model';
import { BaseInfraestructure } from '../../shared/infraestructure/baseinfraestructure';

export class UserInfraestructure
  extends BaseInfraestructure<UserModel>
  implements UserInfraestructureInterface {}
