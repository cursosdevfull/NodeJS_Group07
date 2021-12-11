import express from 'express';
import ErrorHandler from '../../../helpers/error.helper';
import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { AuthorizationGuard } from '../../shared/guards/authorization.guard';
import RoleUseCase from '../application/role.usecase';
import RoleOperation from '../infraestructure/role.operation';
import RoleController from './role.controller';

const operation = new RoleOperation();
const useCase = new RoleUseCase(operation);
const controller = new RoleController(useCase);
const route = express.Router();

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
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
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
