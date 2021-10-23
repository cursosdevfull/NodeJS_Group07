import { BaseRepository } from '../../shared/application/base.repository';
import { DriverModel } from '../domain/driver.model';

export interface DriverInfraestructureInterface
  extends BaseRepository<DriverModel> {
  sentNotificationPush(email: string): void;
}
