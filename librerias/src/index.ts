import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateParameters = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parameters = res.locals;

    const result: any = schema.validate(parameters);
    if (result.hasOwnProperty('error')) {
      const messagesError = result.error.details.map((item: any) =>
        item.message.replace(/\"/g, "'")
      );
      res.status(411).send(messagesError);
    } else {
      next();
    }
  };
};
