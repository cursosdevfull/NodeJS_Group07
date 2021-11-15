import express, { Router } from 'express';
import { mergeParameters } from '../../shared/helpers/parameters.helper';
import { UserController } from './user.controller';
import { validateParameters } from 'validate_parameters/lib';

import { UserSchema } from './user.schema';

const route: Router = express.Router();
const controller = new UserController();

route.get('/', mergeParameters, controller.list);

route.post(
  '/',
  mergeParameters,
  validateParameters(UserSchema.POST),
  controller.insert
);

export { route };
