import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { UserUserCaseInterface } from '../application/userusecase.interface';
import { UserModel } from '../domain/user.model';

const users: UserModel[] = [
  {
    id: 1,
    name: 'User 1',
    email: 'user01@correo.com',
    password: '123456',
    photo: 'user01.jpg',
    roles: ['admin'],
  },
  {
    id: 2,
    name: 'User 1',
    email: 'user01@correo.com',
    password: '123456',
    photo: 'user01.jpg',
    roles: ['admin'],
  },
  {
    id: 3,
    name: 'User 1',
    email: 'user01@correo.com',
    password: '123456',
    photo: 'user01.jpg',
    roles: ['admin'],
  },
  {
    id: 4,
    name: 'User 1',
    email: 'user01@correo.com',
    password: '123456',
    photo: 'user01.jpg',
    roles: ['admin'],
  },
  {
    id: 5,
    name: 'User 1',
    email: 'user01@correo.com',
    password: '123456',
    photo: 'user01.jpg',
    roles: ['admin'],
  },
];

export class UserInfraestructure implements UserUserCaseInterface {
  process(): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
  async list(): Promise<UserModel[]> {
    return Promise.resolve(users);
  }

  async getOne(id: number): Promise<UserModel> {
    return Promise.resolve(users[0]);
  }

  async update(id: number, user: Partial<UserModel>): Promise<UserModel> {
    return Promise.resolve(users.find((user) => user.id === id));
  }

  async getPage(page: number): Promise<UserModel[]> {
    return Promise.resolve(users);
  }

  async insert(user: Omit<UserModel, 'id'>): Promise<UserModel> {
    const clone = { ...user, id: Math.random() };
    return Promise.resolve(clone);
  }

  delete(id: number): Promise<UserModel> {
    return Promise.resolve(users.find((user) => user.id === id));
  }
}
