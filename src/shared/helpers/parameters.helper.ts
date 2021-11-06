import { NextFunction, Request, Response } from 'express';

export const mergeParameters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let parameters = {};
  //res.send('Hello World!');
  if (req.hasOwnProperty('params')) {
    parameters = { ...req.params, ...parameters };
  }

  if (req.hasOwnProperty('query')) {
    parameters = { ...req.query, ...parameters };
  }

  /*   if (req.hasOwnProperty('headers')) {
    parameters = { ...req.headers, ...parameters };
  } */

  if (req.hasOwnProperty('body')) {
    parameters = { ...req.body, ...parameters };
  }

  console.log('merge was called');
  console.log('parameters', parameters);

  res.locals = parameters;

  next();
};
