import User from "../../../entities/user.entity";
import OperationBase from "../../shared/infraestructure/base.operation";
import UserModel from "../domain/user.model";

export default class UserOperation extends OperationBase<UserModel> {
  constructor() {
    super(User);
  }
}
