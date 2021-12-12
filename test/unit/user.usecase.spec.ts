import UserOperation from '../../src/modules/user/infraestructure/user.operation';
import RoleOperation from '../../src/modules/role/infraestructure/role.operation';
import UserUseCase from '../../src/modules/user/application/user.usecase';
import mockUsers from '../mocks/user-inserted-formatted.json';

describe('user.usecase.ts', () => {
  it('list', async () => {
    // Preparación
    (UserOperation as jest.Mock) = jest.fn().mockReturnValue({
      list: jest.fn().mockResolvedValue(mockUsers),
    });

    const operationUser = new UserOperation();
    const operationRole = new RoleOperation();

    // Ejecución
    const userUseCase = new UserUseCase(operationUser, operationRole);
    const response = await userUseCase.list();

    // Comprobación
    expect(response).toHaveProperty('trace');
    expect(response).toHaveProperty('payload');
    expect(response.payload).toHaveProperty('data');
    expect(response).toHaveProperty('payload.data');
    expect(response.payload.data).not.toBeNull();
    expect(Array.isArray(response.payload.data)).toBeTruthy();
    expect(operationUser.list).toHaveBeenCalled();
    expect(operationUser.list).toHaveBeenCalledTimes(1);
  });
});
