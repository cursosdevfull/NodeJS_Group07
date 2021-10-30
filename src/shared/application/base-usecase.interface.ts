import { Result } from '../helpers/result.helper';

export interface BaseUseCaseInterface<T> {
  insert(entity: Partial<T>): Promise<Result<T>>;
  list(): Promise<Result<T>>;
  update(id: number, entity: Partial<T>): Promise<Result<T>>;
  delete(id: number): Promise<Result<T>>;
  getOne(id: number): Promise<Result<T>>;
}
