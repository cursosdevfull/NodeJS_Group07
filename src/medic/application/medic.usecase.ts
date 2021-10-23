import { MedicModel } from '../domain/medic.model';
import { MedicInfraestructureInterface } from './medicinfraestructure.interface';

export class MedicUseCase {
  private infra: MedicInfraestructureInterface;

  constructor(infraestructure: MedicInfraestructureInterface) {
    // .infra = new MedicInfraestructure();
    this.infra = infraestructure;
  }
  insert(medic: MedicModel) {
    this.infra.insert(medic);
  }

  list() {
    return this.infra.list();
  }

  update(id: number, medic: MedicModel) {
    return this.infra.update(id, medic);
  }

  delete(id: number) {
    return this.infra.delete(id);
  }

  getOne(id: number) {
    return this.infra.getOne(id);
  }
}
