import { CHANNELS, ResponseDtoBuilder } from '../helpers/response-dto.helper';
import { Result } from '../helpers/result.helper';
import { BaseUseCaseInterface } from './base-usecase.interface';
import { BaseRepository } from './base.repository';

export abstract class BaseUseCase<T, X, U extends BaseRepository<X>>
  implements BaseUseCaseInterface<T, X>
{
  constructor(
    protected instance: U,
    protected mapping: (data: X | X[]) => T | T[],
    protected traceId: string
  ) {}
  async insert(entity: Partial<X>): Promise<Result<T>> {
    const data = await this.instance.insert(entity);

    return new ResponseDtoBuilder<T>()
      .setStatusCode(200)
      .setTraceId(this.traceId)
      .setData(data)
      .setName('UserUseCase.insert')
      .setChannel(CHANNELS.TEAM1)
      .build();
  }
  async list(): Promise<Result<T>> {
    const data = await this.instance.list();
    console.log('data', data);
    return new ResponseDtoBuilder<T>()
      .setStatusCode(200)
      .setTraceId(this.traceId)
      .setData(this.mapping(data))
      .setName('UserUseCase.list')
      .setChannel(CHANNELS.TEAM1)
      .build();
  }
  update(id: number, entity: Partial<T>): Promise<Result<T>> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<Result<T>> {
    throw new Error('Method not implemented.');
  }
  getOne(id: number): Promise<Result<T>> {
    throw new Error('Method not implemented.');
  }
}
