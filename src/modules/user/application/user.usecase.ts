import RoleRepository from "../../role/application/role.repository";
import RoleModel from "../../role/domain/role.model";
import UseCaseBase from "../../shared/application/base.usecase";
import Result from "../../shared/application/result.interface";
import UserModel from "../domain/user.model";
import UserRepository from "./user.repository";
import UserService from "./user.service";

export default class UserUseCase extends UseCaseBase<
  UserModel,
  UserRepository
> {
  operation: UserRepository;
  operationRole: RoleRepository;

  constructor(operation: UserRepository, operationRole: RoleRepository) {
    super(operation);
    this.operation = operation;
    this.operationRole = operationRole;
  }

  override async insert(entity: UserModel): Promise<Result<UserModel>> {
    entity.password = await UserService.cryptPassword(entity.password);
    entity.refreshToken = UserService.generateRefreshToken();

    const listRolesPromises: Promise<Result<RoleModel>>[] = [];
    entity.roles.forEach((role) => {
      listRolesPromises.push(this.operationRole.listOne({ id: role }, []));
    });

    const roles: Result<RoleModel>[] = await Promise.all(listRolesPromises);
    entity.roles = roles.map((role: Result<RoleModel>) => role.payload.data);

    console.log(entity);

    return await this.operation.insert(entity);
  }
}
