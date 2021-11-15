import { UserInfraestructureInterface } from '../application/userinfraestructure.interface';
import { UserModel } from '../domain/user.model';
import { BaseInfraestructure } from '../../shared/infraestructure/baseinfraestructure';
import { queries } from './user.queries';
import DatabaseBootstrap from '../../bootstrap/database.bootstrap';
import { RoleModel } from '../../role/domain/role.model';

export class UserInfraestructure
  extends BaseInfraestructure<UserModel>
  implements UserInfraestructureInterface
{
  constructor() {
    super(queries);
  }

  async insertUserRole(id: number, user: UserModel): Promise<any> {
    const idUser = id;
    const listPromises: Promise<any>[] = [];
    for (const role of user.roles) {
      listPromises.push(
        DatabaseBootstrap.executeStatement<UserModel>(queries.insertUserRole, {
          idUser,
          idRole: (role as RoleModel).id,
        })
      );
    }

    return await Promise.all(listPromises);
    /*     return await DatabaseBootstrap.executeStatement<UserModel>(
      queries.insertUserRole,
      user
    ); */
  }

  /* override list(): Promise<UserModel[]> {
    return Promise.resolve(mockUsers);
  } */
}
