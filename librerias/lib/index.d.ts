import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
export declare const validateParameters: (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => void;
