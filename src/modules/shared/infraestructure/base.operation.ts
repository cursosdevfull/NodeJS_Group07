import { getRepository, ObjectType, Repository } from "typeorm";
import RepositoryBase from "../application/base.repository";
import Result from "../application/result.interface";
import ResponseDto from "./response.dto";
import * as _ from "lodash";

export default class OperationBase<T> implements RepositoryBase<T> {
  private entity: ObjectType<T>;

  constructor(entity: ObjectType<T>) {
    this.entity = entity;
  }

  async list(
    where: object = {},
    relations: string[] = [],
    order: object = {},
    fieldsToDelete: string[] = []
  ): Promise<Result<T>> {
    const trace = "abcd";
    const repository: Repository<T> = getRepository(this.entity);
    const result = await repository.find({ where, relations, order });

    if (fieldsToDelete.length > 0) {
      result.forEach((item: any) => {
        fieldsToDelete.forEach((field) => {
          delete item[field];
        });
      });
    }

    return ResponseDto.format(trace, result);
  }

  async listOne(
    where: object = {},
    relations: string[] = []
  ): Promise<Result<T>> {
    const trace = "abcd";
    const repository: Repository<T> = getRepository(this.entity);
    const result = await repository.findOne({ where, relations });
    console.log("listOne");
    console.log(result);
    return ResponseDto.format(trace, result);
  }

  async listByPage(
    page: number,
    pageSize: number,
    where: object = {},
    relations: string[] = [],
    order: object = {},
    fieldsToDelete: string[] = []
  ): Promise<Result<T>> {
    const trace = "abcd";
    const repository: Repository<T> = getRepository(this.entity);
    const [result, total] = await repository.findAndCount({
      where,
      relations,
      order,
      skip: page * pageSize,
      take: pageSize,
    });

    if (fieldsToDelete.length > 0) {
      result.forEach((item: any) => {
        fieldsToDelete.forEach((field) => {
          delete item[field];
        });
      });
    }

    return ResponseDto.format(trace, result, total);
  }

  async insert(entity: T): Promise<Result<T>> {
    const trace = "abcd";
    const repository: Repository<T> = getRepository(this.entity);
    const result = await repository.save(entity);

    return ResponseDto.format(trace, result);
  }

  async update(
    entity: T,
    where: object = {},
    relations: string[] = []
  ): Promise<Result<T>> {
    const trace = "abcd";
    const repository: Repository<T> = getRepository(this.entity);
    let recordToUpdate = await repository.findOne({ where, relations });
    recordToUpdate = _.merge(recordToUpdate, entity);

    await repository.save(recordToUpdate);

    return ResponseDto.format(trace, recordToUpdate);
  }

  async remove(where: object): Promise<Result<T>> {
    const trace = "abcd";
    const repository: Repository<T> = getRepository(this.entity);
    let recordToDelete = await repository.findOne({ where });
    recordToDelete = _.merge(recordToDelete, { active: false });

    if (recordToDelete) {
      await repository.save(recordToDelete);
      return ResponseDto.format(trace, recordToDelete);
    }

    return null;
  }
}
