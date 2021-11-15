import { BaseUseCase } from '../../shared/application/base-usecase.class';
import { UserModel } from '../domain/user.model';
import { UserInfraestructureInterface } from './userinfraestructure.interface';
import { UserUseCaseInterface } from './userusecaseinterface';
import { mappingUserDto, UserResponseDto } from './user-response.dto';
import { Result } from '../../shared/helpers/result.helper';
import {
  CHANNELS,
  ResponseDtoBuilder,
} from '../../shared/helpers/response-dto.helper';
import { ResultSetHeader } from '../../shared/application/resultSetHeader.interface';
import { UserService } from './user.service';

export class UserUseCase
  extends BaseUseCase<UserResponseDto, UserModel, UserInfraestructureInterface>
  implements UserUseCaseInterface
{
  constructor(
    private infraestructure: UserInfraestructureInterface,
    protected traceId: string
  ) {
    super(infraestructure, mappingUserDto, traceId);
  }

  override async insert(
    entity: Partial<UserModel>
  ): Promise<Result<UserResponseDto>> {
    const passwordHashed = await UserService.encrypt(entity.password);
    entity.password = passwordHashed;

    const data: ResultSetHeader = await this.instance.insert(entity);
    const idUser = data.insertId;

    const result = await this.instance.insertUserRole(idUser, entity);

    console.log('result', result);

    return new ResponseDtoBuilder<UserResponseDto>()
      .setStatusCode(200)
      .setTraceId(this.traceId)
      .setData(result)
      .setName('UserUseCase.insert')
      .setChannel(CHANNELS.TEAM1)
      .build();
  }

  /*   override async list(): Promise<Result<UserResponseDto>> {
    const traceId = generateTrace();
    const data = await this.infraestructure.list();

    return new ResponseDtoBuilder<UserResponseDto>()
      .setStatusCode(200)
      .setTraceId(traceId)
      .setData(mappingUserDto(data))
      .setName('UserUseCase.list')
      .setChannel(CHANNELS.TEAM1)
      .build();

    // return ResponseDto.format<UserModel>(200, traceId, data, 'User list');
  } */
}
