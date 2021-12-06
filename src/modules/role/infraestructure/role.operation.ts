import Role from '../../../entities/role.entity';
import OperationBase from '../../shared/infraestructure/base.operation';
import RoleModel from '../domain/role.model';

export default class RoleOperation extends OperationBase<RoleModel> {
  constructor() {
    super(Role);
  }
}
