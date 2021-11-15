import { ResultSetHeader } from './resultSetHeader.interface';

export interface BaseRepository<T> {
  insert(entity: Partial<T>): Promise<ResultSetHeader>;
  list(): Promise<T[]>;
  update(id: number, entity: Partial<T>): Promise<T>;
  delete(id: number): Promise<T>;
  getOne(id: number): Promise<T>;
}
