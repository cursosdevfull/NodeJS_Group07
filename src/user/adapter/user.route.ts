import express, { Router, Request, Response, NextFunction } from 'express';
import { mergeParameters } from '../../shared/helpers/parameters.helper';
import { UserController } from './user.controller';

const route: Router = express.Router();
const controller = new UserController();

/* route.get('/', (req: Request, res: Response) => {
  controller.list(req, res);
}); */

route.get('/:id', mergeParameters(), controller.list);

export { route };
