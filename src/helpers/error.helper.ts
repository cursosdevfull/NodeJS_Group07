import { NextFunction, Request, Response } from "express";

export interface IError extends Error {
  status?: number;
}

export default class ErrorHandler {
  static notFound(req: Request, res: Response, next: NextFunction) {
    const error: IError = new Error("Not found");
    error.status = 404;
    next(error);
  }

  static asyncError() {}

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

    if (process.env.NODE_ENV !== "production") {
      objError.stack = error.stack;
    }

    res.status(error.status).json(objError);
  }
}
