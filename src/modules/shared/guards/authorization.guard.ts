import { NextFunction, Request, Response } from 'express';
import { IError } from '../../../helpers/error.helper';

export class AuthorizationGuard {
  static canActivate(...rolesAllowed: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { roles } = res.locals.payload;

      const isUserAuthorized = this.isUserAuthorized(roles, rolesAllowed);

      if (isUserAuthorized) {
        next();
      } else {
        const error: IError = new Error('Usuario no autorizado');
        error.status = 401;
        next(error);
      }
    };
  }

  static isUserAuthorized(
    rolesUser: string[],
    rolesAllowed: string[]
  ): boolean {
    let roleMatched = false;
    for (const role of rolesUser) {
      if (rolesAllowed.includes(role)) {
        roleMatched = true;
        break;
      }
    }

    return roleMatched;
  }
}
