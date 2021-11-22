import { UserModel } from "../domain/user.model";
import { BaseRepository } from "../../shared/application/base.repository";

export interface UserInfraestructureInterface
  extends BaseRepository<UserModel> {}
