import express from 'express';
import ErrorHandler from '../../../helpers/error.helper';
import { AuthUseCase } from '../application/auth.usecase';
import { AuthOperation } from '../infraestructure/auth.operation';
import { AuthController } from './auth.controller';

const route = express.Router();

const operation = new AuthOperation();
const useCase = new AuthUseCase(operation);
const controller = new AuthController(useCase);

route.post(
  '/login',
  ErrorHandler.asyncError(controller.login.bind(controller))
);

route.get(
  '/request-new-access-token/:refreshToken',
  ErrorHandler.asyncError(controller.getNewAccessToken.bind(controller))
);

export { route };
