import { UseCaseRepository } from './usecase.repository';

export abstract class AbstractUseCase<T> {
  protected userInfra: UseCaseRepository<T>;
  constructor(userInfra: UseCaseRepository<T>) {
    this.userInfra = userInfra;
  }

  async list(): Promise<T[]> {
    return this.userInfra.list();
  }

  async getOne(id: number): Promise<T> {
    return this.userInfra.getOne(id);
  }

  async update(id: number, user: Partial<T>): Promise<T> {
    return this.userInfra.update(id, user);
  }

  async getPage(page: number): Promise<T[]> {
    return this.userInfra.getPage(page);
  }

  async insert(user: Omit<T, 'id'>): Promise<T> {
    return this.userInfra.insert(user);
  }

  async delete(id: number): Promise<T> {
    return this.userInfra.delete(id);
  }
}
