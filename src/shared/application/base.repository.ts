import { Result } from "../helpers/result.helper";

export interface BaseRepository<T> {
  list(where: object, relations: string[], order: object): Promise<Result<T>>;
  listOne(where: object, relations: string[]): Promise<Result<T>>;
  listByPage(
    page: number,
    pageSize: number,
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>>;
  create(data: T): Promise<Result<T>>;
  update(data: T, where: object): Promise<Result<T>>;
  delete(where: object): Promise<Result<T>>;
}
