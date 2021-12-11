import express, { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../../helpers/error.helper';
import RoleOperation from '../../role/infraestructure/role.operation';
import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { AuthorizationGuard } from '../../shared/guards/authorization.guard';
import UserUseCase from '../application/user.usecase';
import UserOperation from '../infraestructure/user.operation';
import UserController from './user.controller';

const operation = new UserOperation();
const operationRole = new RoleOperation();
const useCase = new UserUseCase(operation, operationRole);
const controller = new UserController(useCase);
const route = express.Router();

route.get(
  '/',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  ErrorHandler.asyncError(controller.list.bind(controller))
);

route.get(
  '/',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  ErrorHandler.asyncError(controller.list.bind(controller))
);

route.get(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  ErrorHandler.asyncError(controller.listOne.bind(controller))
);
route.get(
  '/page/:page',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  ErrorHandler.asyncError(controller.listByPage.bind(controller))
);
route.post(
  '/',
  /*   AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'), */
  ErrorHandler.asyncError(controller.insert.bind(controller))
);
route.put(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  ErrorHandler.asyncError(controller.update.bind(controller))
);
route.delete(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  ErrorHandler.asyncError(controller.remove.bind(controller))
);

export { route };
