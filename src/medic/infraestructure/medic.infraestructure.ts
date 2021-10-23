import { MedicInfraestructureInterface } from '../application/medicinfraestructure.interface';
import { MedicModel } from '../domain/medic.model';
import { BaseInfraestructure } from '../../shared/infraestructure/baseinfraestructure';

export class MedicInfraestructure
  extends BaseInfraestructure<MedicModel>
  implements MedicInfraestructureInterface
{
  listByPage(page: number): MedicModel[] {
    return [];
  }

  override list(): MedicModel[] {
    return [];
  }

  getPC(cmp: string) {}
}
