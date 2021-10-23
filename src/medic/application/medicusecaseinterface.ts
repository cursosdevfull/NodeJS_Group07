import { BaseUseCaseInterface } from '../../shared/application/base-usecase.interface';
import { MedicModel } from '../domain/medic.model';

export interface MedicUseCaseInterface
  extends BaseUseCaseInterface<MedicModel> {}
