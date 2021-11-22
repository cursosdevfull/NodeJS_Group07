import { getRepository, ObjectType, Repository } from "typeorm";
import { BaseRepository } from "../application/base.repository";
import { CHANNELS, ResponseDtoBuilder } from "../helpers/response-dto.helper";
import { Result } from "../helpers/result.helper";
import * as _ from "lodash";

export abstract class BaseInfraestructure<T> implements BaseRepository<T> {
  private entity: ObjectType<T>;

  constructor(entity: ObjectType<T>) {
    this.entity = entity;
  }

  async list(
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>> {
    const repository: Repository<T> = getRepository(this.entity);
    const data: T[] = await repository.find({ where, relations, order });

    return new ResponseDtoBuilder<T>()
      .setStatusCode(200)
      .setTraceId("")
      .setData(data)
      .setName("list")
      .setChannel(CHANNELS.TEAM1)
      .build();
  }

  async listOne(where: object, relations: string[]): Promise<Result<T>> {
    const repository: Repository<T> = getRepository(this.entity);
    const data: T = await repository.findOne({ where, relations });

    return new ResponseDtoBuilder<T>()
      .setStatusCode(200)
      .setTraceId("")
      .setData(data)
      .setName("listOne")
      .setChannel(CHANNELS.TEAM1)
      .build();
  }
  async listByPage(
    page: number,
    pageSize: number,
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>> {
    const repository: Repository<T> = getRepository(this.entity);
    const [data, total] = await repository.findAndCount({
      where,
      relations,
      order,
      skip: page * pageSize,
      take: pageSize,
    });

    return new ResponseDtoBuilder<T>()
      .setStatusCode(200)
      .setTraceId("")
      .setData(data)
      .setName("listByPage")
      .setChannel(CHANNELS.TEAM1)
      .setTotal(total)
      .build();
  }
  async create(data: T): Promise<Result<T>> {
    const repository: Repository<T> = getRepository(this.entity);
    const entity: T = await repository.save(data);
    return new ResponseDtoBuilder<T>()
      .setStatusCode(200)
      .setTraceId("")
      .setData(entity)
      .setName("create")
      .setChannel(CHANNELS.TEAM1)
      .build();
  }
  async update(data: T, where: object): Promise<Result<T>> {
    const repository: Repository<T> = getRepository(this.entity);
    let entity = await repository.findOne({ where });
    entity = _.merge(entity, data);
    await repository.save(entity);

    return new ResponseDtoBuilder<T>()
      .setStatusCode(200)
      .setTraceId("")
      .setData(entity)
      .setName("update")
      .setChannel(CHANNELS.TEAM1)
      .build();
  }
  async delete(where: object): Promise<Result<T>> {
    const repository: Repository<T> = getRepository(this.entity);
    const recordToDelete: T = await repository.findOne(where);

    if (recordToDelete) {
      await repository.delete(recordToDelete);
      return new ResponseDtoBuilder<T>()
        .setStatusCode(200)
        .setTraceId("")
        .setData(recordToDelete)
        .setName("delete")
        .setChannel(CHANNELS.TEAM1)
        .build();
    }

    return null;
  }
}
