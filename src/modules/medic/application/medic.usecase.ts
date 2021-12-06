import UseCaseBase from '../../shared/application/base.usecase';
import MedicModel from '../domain/medic.model';
import MedicRepository from './medic.repository';

export default class MedicUseCase extends UseCaseBase<
  MedicModel,
  MedicRepository
> {
  constructor(operation: MedicRepository) {
    super(operation);
  }
}
