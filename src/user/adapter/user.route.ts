import express, { Router, Request, Response } from 'express';
import { UserController } from './user.controller';

const route: Router = express.Router();
const controller = new UserController();

/* route.get('/', (req: Request, res: Response) => {
  controller.list(req, res);
}); */

route.get('/', controller.list);

export { route };
