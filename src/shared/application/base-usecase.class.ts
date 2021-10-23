import { BaseUseCaseInterface } from './base-usecase.interface';

export abstract class BaseUseCase<T> implements BaseUseCaseInterface<T> {
  constructor(protected instance: any) {}
  insert(entity: T): void {
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
