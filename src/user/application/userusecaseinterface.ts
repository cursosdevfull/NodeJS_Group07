import { BaseUseCaseInterface } from '../../shared/application/base-usecase.interface';
import { UserResponseDto } from './user-response.dto';

export interface UserUseCaseInterface
  extends BaseUseCaseInterface<UserResponseDto> {}
