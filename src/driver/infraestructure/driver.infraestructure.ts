import { MedicInfraestructureInterface } from '../../medic/application/medicinfraestructure.interface';
import { MedicModel } from '../../medic/domain/medic.model';
import { BaseInfraestructure } from '../../shared/infraestructure/baseinfraestructure';
import { DriverInfraestructureInterface } from '../application/dirverinfraestructure.interface';
import { DriverModel } from '../domain/driver.model';

export class DriverInfraestructure
  extends BaseInfraestructure<DriverModel>
  implements DriverInfraestructureInterface
{
  sentNotificationPush(email: string): void {
    throw new Error('Method not implemented.');
  }
}
