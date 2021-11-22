import { CHANNELS, ResponseDtoBuilder } from "../helpers/response-dto.helper";
import { Result } from "../helpers/result.helper";
import { BaseUseCaseInterface } from "./base-usecase.interface";
import { BaseRepository } from "./base.repository";

export abstract class BaseUseCase<T, U extends BaseRepository<T>> {
  constructor(protected instance: U) {}

  async list(
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
    return await this.instance.list(where, relations, order);
  }

  async listOne(
    where: object = {},
    relations: string[] = []
  ): Promise<Result<T>> {
    return await this.instance.listOne(where, relations);
  }

  async listByPage(
    page: number,
    pageSize: number,
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
    return await this.instance.listByPage(
      page,
      pageSize,
      where,
      relations,
      order
    );
  }

  async create(entity: T): Promise<Result<T>> {
    return await this.instance.create(entity);
  }

  async update(entity: T, where: object = {}): Promise<Result<T>> {
    return await this.instance.update(entity, where);
  }

  async delete(where: object): Promise<Result<T>> {
    return await this.instance.delete(where);
  }
}
