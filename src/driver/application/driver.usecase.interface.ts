import { BaseUseCaseInterface } from '../../shared/application/base-usecase.interface';
import { DriverModel } from '../domain/driver.model';

export interface DriverUseCaseInterface
  extends BaseUseCaseInterface<DriverModel> {}
