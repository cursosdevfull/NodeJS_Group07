import { BaseRepository } from '../application/base.repository';

export abstract class BaseInfraestructure<T> implements BaseRepository<T> {
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
  insert(entity: T) {}
}
