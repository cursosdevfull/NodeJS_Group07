import { Result } from '../helpers/result.helper';
import { BaseUseCaseInterface } from './base-usecase.interface';
import { BaseRepository } from './base.repository';

export abstract class BaseUseCase<T, X, U extends BaseRepository<X>>
  implements BaseUseCaseInterface<T>
{
  constructor(protected instance: U) {}
  insert(entity: Partial<T>): Promise<Result<T>> {
    throw new Error('Method not implemented.');
    // return this.instance.insert(entity);
  }
  list(): Promise<Result<T>> {
    /*     const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([]);
      }, 5000);
    });
    return promise as Promise<T[]>; */
    throw new Error('Method not implemented.');
    //return this.instance.list();
  }
  update(id: number, entity: Partial<T>): Promise<Result<T>> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<Result<T>> {
    throw new Error('Method not implemented.');
  }
  getOne(id: number): Promise<Result<T>> {
    throw new Error('Method not implemented.');
  }
}
