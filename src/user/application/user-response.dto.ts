import { UserModel } from '../domain/user.model';
import { RoleModel } from '../../role/domain/role.model';

export interface UserResponseDto {
  id: number;
  name: string;
  email: string;
  roles: string[];
  photo: string;
}

export const mappingUserDto = (
  data: UserModel | UserModel[]
): UserResponseDto | UserResponseDto[] => {
  const isArray = Array.isArray(data);

  if (isArray) {
    return data.map((el) => ({
      id: el.id,
      name: el.name,
      email: el.email,
      roles: el.roles.map((el) => (el as RoleModel).name),
      photo: el.photo,
    }));
  } else {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      roles: data.roles.map((el) => (el as RoleModel).name),
      photo: data.photo,
    };
  }
};
