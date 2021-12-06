import express from 'express';
import MedicUseCase from '../application/medic.usecase';
import MedicOperation from '../infraestructure/medic.operation';
import MedicController from './medic.controller';

const operation = new MedicOperation();
const useCase = new MedicUseCase(operation);
const controller = new MedicController(useCase);
const route = express.Router();

route.get('/', controller.list.bind(controller));
route.get('/:id', controller.listOne.bind(controller));
route.get('/page/:page', controller.listByPage.bind(controller));
route.post('/', controller.insert.bind(controller));
route.put('/:id', controller.update.bind(controller));
route.delete('/:id', controller.remove.bind(controller));

export { route };
