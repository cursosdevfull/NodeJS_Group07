import { IQueries } from '../../shared/infraestructure/queries.interface';

export interface IQueriesUser extends IQueries {
  insertUserRole: string;
}

export const queries: Partial<IQueriesUser> = {
  list: `
        SELECT tuser.id, tuser.name, email, password, photo, trole.id as idRole, trole.name as roleName FROM user tuser
        INNER JOIN user_role tuser_role ON tuser.id = tuser_role.idUser
        INNER JOIN role trole ON tuser_role.idRole = trole.id
        ORDER BY trole.name ASC
    `,
  insert: `
        INSERT INTO user (name, email, password, photo) values (:name, :email, :password, :photo)
  `,
  insertUserRole: `
        INSERT INTO user_role (idUser, idRole) values (:idUser, :idRole)
  `,
};
