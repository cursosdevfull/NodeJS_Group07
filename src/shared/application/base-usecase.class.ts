import { BaseUseCaseInterface } from './base-usecase.interface';
import { BaseRepository } from './base.repository';

export abstract class BaseUseCase<T, U extends BaseRepository<T>>
  implements BaseUseCaseInterface<T>
{
  constructor(protected instance: U) {}
  insert(entity: Partial<T>): Promise<T> {
    return this.instance.insert(entity);
  }
  list(): Promise<T[]> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([]);
      }, 5000);
    });
    return promise as Promise<T[]>;
    // return Promise.resolve([]);
  }
  update(id: number, entity: Partial<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<T> {
    throw new Error('Method not implemented.');
  }
  getOne(id: number): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
