import { NextFunction, Request, Response } from 'express';

export interface IError extends Error {
  status?: number;
}

export default class ErrorHandler {
  static notFound(req: Request, res: Response, next: NextFunction) {
    const error: IError = new Error('Not found');
    error.status = 404;
    next(error);
  }

  static asyncError(
    ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ) {
    return (req: Request, res: Response, next: NextFunction) => {
      return ftn(req, res, next).catch((err) => {
        let error: IError;

        if (err && err.code) {
          error = new Error('Database error');
          error.message = err.name;
          error.stack = err;
          error.status = 500;
        } else {
          error = new Error('Async error');
          error.message = err.message;
          error.stack = err;
          error.status = err.status;
        }

        next(error);
      });
    };
  }

  static generic(
    error: IError,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const objError: IError = {
      name: error.name,
      status: error.status,
      message: error.message,
    };

    if (process.env.NODE_ENV !== 'production') {
      objError.stack = error.stack;
    }

    res.status(error.status).json(objError);
  }
}
