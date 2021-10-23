export interface BaseUseCaseInterface<T> {
  insert(entity: Partial<T>): Promise<T>;
  list(): Promise<T[]>;
  update(id: number, entity: Partial<T>): Promise<T>;
  delete(id: number): Promise<T>;
  getOne(id: number): Promise<T>;
}
