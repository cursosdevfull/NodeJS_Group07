import DatabaseBootstrap from '../../src/bootstrap/database.bootstrap';
import request from 'supertest';
import app from '../../src/app';

const tokenValid =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoic2VyZ2lvIiwicm9sZXMiOlsiQURNSU4iXSwiaWF0IjoxNjM5MjQ2OTcxLCJleHAiOjE2NDUyNDY5NzF9.zTLFmCdCRSgDUiBVtBMP2i75H6vhBzVY6ZFPyt7S7_w';
const tokenExpired =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoic2VyZ2lvIiwicm9sZXMiOlsiQURNSU4iXSwiaWF0IjoxNjM5MjQ3MDI4LCJleHAiOjE2MzkyNDcwMzR9.t5cj3EK-EAY7Y33jQfOHWXmk4G_YWQ9F2e3Zf6fGATw';

const databaseBootstrap = new DatabaseBootstrap();

const TIMEOUT = 5 * 60 * 60 * 1000;

describe('user.route.ts', () => {
  beforeAll(async () => {
    await databaseBootstrap.initialize();
  });

  afterAll(async () => {
    await databaseBootstrap.getConnection().close();
  });

  it(
    'get /users without token',
    async () => {
      // Preparación y ejecución
      const response = await request(app).get('/users');

      // Comprobación
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Usuario no encontrado');
    },
    TIMEOUT
  );

  it(
    'get /users with token expired',
    async () => {
      const response = await request(app)
        .get('/users')
        .set('Authorization', 'Bearer ' + tokenExpired);

      expect(response.status).toBe(409);
      expect(response.body.message).toBe('El access token ha expirado');
    },
    TIMEOUT
  );

  it(
    'get /users with token valid',
    async () => {
      const response = await request(app)
        .get('/users')
        .set('Authorization', 'Bearer ' + tokenValid);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('trace');
      expect(response.body).toHaveProperty('payload');
    },
    TIMEOUT
  );
});
