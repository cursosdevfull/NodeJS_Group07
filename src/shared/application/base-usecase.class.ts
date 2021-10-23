import { BaseUseCaseInterface } from './base-usecase.interface';
import { BaseRepository } from './base.repository';

export abstract class BaseUseCase<T, U extends BaseRepository<T>>
  implements BaseUseCaseInterface<T>
{
  constructor(protected instance: U) {}
  insert(entity: T): void {
    this.instance.insert(entity);
    throw new Error('Method not implemented.');
  }
  list(): T[] {
    throw new Error('Method not implemented.');
  }
  update(id: number, entity: T): T {
    throw new Error('Method not implemented.');
  }
  delete(id: number): T {
    throw new Error('Method not implemented.');
  }
  getOne(id: number): T {
    throw new Error('Method not implemented.');
  }
}
