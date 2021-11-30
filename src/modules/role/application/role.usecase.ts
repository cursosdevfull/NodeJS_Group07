import UseCaseBase from "../../shared/application/base.usecase";
import RoleModel from "../domain/role.model";
import RoleRepository from "./role.repository";

export default class RoleUseCase extends UseCaseBase<
  RoleModel,
  RoleRepository
> {
  constructor(operation: RoleRepository) {
    super(operation);
  }
}
