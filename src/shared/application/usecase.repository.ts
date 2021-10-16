export interface UseCaseRepository<T> {
  list(): Promise<T[]>;

  getOne(id: number): Promise<T>;

  update(id: number, user: Partial<T>): Promise<T>;

  getPage(page: number): Promise<T[]>;

  insert(user: Omit<T, 'id'>): Promise<T>;

  delete(id: number): Promise<T>;
}
