export interface BaseUseCaseInterface<T> {
  insert(entity: T): void;
  list(): T[];
  update(id: number, entity: T): T;
  delete(id: number): T;
  getOne(id: number): T;
}
