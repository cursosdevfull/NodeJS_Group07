import { Request, Response, NextFunction } from 'express';
import { IError } from '../../../helpers/error.helper';
import UserService from '../../user/application/user.service';

export class AuthenticationGuard {
  static canActivate(req: Request, res: Response, next: NextFunction): void {
    const headers = req.headers;
    const authenticationHeader = headers['authorization'];

    if (authenticationHeader) {
      const partsAuthenticationHeader = authenticationHeader.split(' ');

      if (partsAuthenticationHeader.length > 1) {
        const accessToken = partsAuthenticationHeader[1];

        UserService.validateAccessToken(accessToken).then(
          (payload) => {
            res.locals.payload = payload;
            next();
          },
          (error) => {
            const err: IError = new Error(error.message);
            err.status = error.status;
            next(err);
          }
        );
      } else {
        const error: IError = new Error('Usuario no encontrados');
        error.status = 401;
        next(error);
      }
    } else {
      const error: IError = new Error('Usuario no encontrados');
      error.status = 401;
      next(error);
    }
  }
}
