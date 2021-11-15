import { UserModel } from '../domain/user.model';
import { BaseRepository } from '../../shared/application/base.repository';

export interface UserInfraestructureInterface
  extends BaseRepository<UserModel> {
  insertUserRole(id: number, user: Partial<UserModel>): Promise<any>;
}
