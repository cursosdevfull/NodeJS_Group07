import { Medic } from '../../../entities/medic.entity';
import OperationBase from '../../shared/infraestructure/base.operation';
import MedicModel from '../domain/medic.model';

export default class MedicOperation extends OperationBase<MedicModel> {
  constructor() {
    super(Medic);
  }
}
