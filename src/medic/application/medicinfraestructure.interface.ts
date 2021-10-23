import { MedicModel } from '../domain/medic.model';
import { BaseRepository } from '../../shared/application/base.repository';

export interface MedicInfraestructureInterface
  extends BaseRepository<MedicModel> {}
