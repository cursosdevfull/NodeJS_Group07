import { DriverModel } from '../domain/driver.model';
import { DriverInfraestructureInterface } from './dirverinfraestructure.interface';

export class DriverUseCase {
  constructor(private infra: DriverInfraestructureInterface) {}

  insert(driver: DriverModel) {
    return this.infra.insert(driver);
  }
}
