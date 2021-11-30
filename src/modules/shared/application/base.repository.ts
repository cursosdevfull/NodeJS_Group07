import Result from "./result.interface";

export default interface RepositoryBase<T> {
  list(
    where: object,
    relations: string[],
    order: object,
    fieldsToDelete: string[]
  ): Promise<Result<T>>;
  listOne(where: object, relations: string[]): Promise<Result<T>>;
  listByPage(
    page: number,
    pageSize: number,
    where: object,
    relations: string[],
    order: object,
    fieldsToDelete: string[]
  ): Promise<Result<T>>;
  insert(entity: Partial<T>): Promise<Result<T>>;
  update(entity: T, where: object, relations: string[]): Promise<Result<T>>;
  remove(where: object): Promise<Result<T>>;
}
