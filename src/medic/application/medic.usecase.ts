import { BaseUseCase } from '../../shared/application/base-usecase.class';
import { MedicModel } from '../domain/medic.model';
import { MedicInfraestructureInterface } from './medicinfraestructure.interface';
import { MedicUseCaseInterface } from './medicusecaseinterface';

export class MedicUseCase
  extends BaseUseCase<MedicModel, MedicInfraestructureInterface>
  implements MedicUseCaseInterface
{
  constructor(private infraestructure: MedicInfraestructureInterface) {
    super(infraestructure);
  }

  getPassportCovid(cmp: string): any {
    this.infraestructure.getPC(cmp);
  }
}
