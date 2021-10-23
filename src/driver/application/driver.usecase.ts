import { BaseUseCase } from '../../shared/application/base-usecase.class';
import { DriverModel } from '../domain/driver.model';
import { DriverInfraestructureInterface } from './dirverinfraestructure.interface';
import { DriverUseCaseInterface } from './driver.usecase.interface';

export class DriverUseCase
  extends BaseUseCase<DriverModel>
  implements DriverUseCaseInterface
{
  constructor(private infraestructure: DriverInfraestructureInterface) {
    super(infraestructure);
  }
}
