import { Result } from '../helpers/result.helper';

export interface BaseUseCaseInterface<T, X> {
  insert(entity: Partial<X>): Promise<Result<T>>;
  list(): Promise<Result<T>>;
  update(id: number, entity: Partial<T>): Promise<Result<T>>;
  delete(id: number): Promise<Result<T>>;
  getOne(id: number): Promise<Result<T>>;
}
