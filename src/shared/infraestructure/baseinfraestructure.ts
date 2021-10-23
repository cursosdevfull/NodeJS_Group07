import { BaseRepository } from '../application/base.repository';

export abstract class BaseInfraestructure<T> implements BaseRepository<T> {
  list(): Promise<T[]> {
    throw new Error('Method not implemented.');
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
  insert(entity: Partial<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
