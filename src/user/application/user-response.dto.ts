import { UserModel } from '../domain/user.model';
import yenv from 'yenv';

const env = yenv();

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
    return data.reduce((acum: any, el: any) => {
      const indexFound = acum.findIndex((it: any) => it.id === el.id);
      if (indexFound !== -1) {
        acum[indexFound].roles.push(el.roleName);
      } else {
        acum.push({
          id: el.id,
          name: el.name,
          email: el.email,
          photo: `${env.BUCKET_URL}/${el.photo}`,
          roles: [el.roleName],
        });
      }
      return acum;
    }, []);
    /*   return data.map((el) => ({
      id: el.id,
      name: el.name,
      email: el.email,
      roles: el.roles.map((el) => (el as RoleModel).name),
      photo: el.photo,
    })); */
  } else {
    const dataUser: any = { ...data };
    return {
      id: dataUser.id,
      name: dataUser.name,
      email: dataUser.email,
      roles: [dataUser.roleName],
      photo: `${env.BUCKET_URL}/${dataUser.photo}`,
    };
  }
};
