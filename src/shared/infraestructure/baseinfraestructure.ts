import { Connection, ResultSetHeader } from 'mysql2';
import DatabaseBootstrap from '../../bootstrap/database.bootstrap';
import { BaseRepository } from '../application/base.repository';
import { IQueries } from './queries.interface';

export abstract class BaseInfraestructure<T> implements BaseRepository<T> {
  constructor(private queries: Partial<IQueries>) {}

  async list(): Promise<T[]> {
    return (await DatabaseBootstrap.executeStatement<T>(
      this.queries.list
    )) as T[];
  }
  async insert(entity: Partial<T>): Promise<ResultSetHeader> {
    return (await DatabaseBootstrap.executeStatement<ResultSetHeader>(
      this.queries.insert,
      entity
    )) as ResultSetHeader;
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
