import { BaseUseCase } from '../../shared/application/base-usecase.class';
import { generateTrace } from '../../shared/helpers/trace.helper';
import { UserModel } from '../domain/user.model';
import { UserInfraestructureInterface } from './userinfraestructure.interface';
import { UserUseCaseInterface } from './userusecaseinterface';
import {
  CHANNELS,
  ResponseDtoBuilder,
} from '../../shared/helpers/response-dto.helper';
import { Result } from '../../shared/helpers/result.helper';
import { mappingUserDto, UserResponseDto } from './user-response.dto';

export class UserUseCase
  extends BaseUseCase<UserResponseDto, UserModel, UserInfraestructureInterface>
  implements UserUseCaseInterface
{
  constructor(private infraestructure: UserInfraestructureInterface) {
    super(infraestructure);
  }

  override async list(): Promise<Result<UserResponseDto>> {
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
  }
}
