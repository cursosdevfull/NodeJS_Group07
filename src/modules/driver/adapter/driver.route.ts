import express from 'express';
import ErrorHandler from '../../../helpers/error.helper';
import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { AuthorizationGuard } from '../../shared/guards/authorization.guard';
import DriverUseCase from '../application/driver.usecase';
import DriverOperation from '../infraestructure/driver.operation';
import DriverController from './driver.controller';

const operation = new DriverOperation();
const useCase = new DriverUseCase(operation);
const controller = new DriverController(useCase);
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
