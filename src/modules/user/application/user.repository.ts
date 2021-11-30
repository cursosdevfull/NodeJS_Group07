import RepositoryBase from "../../shared/application/base.repository";
import UserModel from "../domain/user.model";

export default interface UserRepository extends RepositoryBase<UserModel> {}
