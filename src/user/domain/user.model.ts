import { RoleModel } from '../../role/domain/role.model';
export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  photo: string;
  roles: RoleModel[] | string[];
}

export class UserModel2 {
  /*   private id: number;
  private name: string;
  private email: string;
  private password: string;
  private photo: string;
  private roles: any[];

  constructor(id: number, name: string, email: string, password: string, photo: string, roles: any[]) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.photo = photo
    this.roles = roles
  } */

  constructor(
    private id: number,
    private name: string,
    private email: string,
    private password: string,
    private photo: string,
    private roles: any[]
  ) {}
}
