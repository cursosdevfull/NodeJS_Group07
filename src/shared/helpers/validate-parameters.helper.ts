import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateParameters = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parameters = res.locals;
    /*     const schema: Joi.ObjectSchema = Joi.object({
      id: Joi.number().integer().required(),
      name: Joi.string().required(),
      age: Joi.number().integer().min(18).required(),
    }); */

    const result: Joi.ValidationResult = schema.validate(parameters);
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
