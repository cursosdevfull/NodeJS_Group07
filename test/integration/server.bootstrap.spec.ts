import app from '../../src/app';
import ServerBootstrap from '../../src/bootstrap/server.bootstrap';

describe('server.bootstrap.ts', () => {
  it('initialize server', async () => {
    // Preparación
    const serverBootstrap = new ServerBootstrap(app);

    // Ejecución
    const response = await serverBootstrap.initialize();

    // Comprobación
    expect(response).toBe(true);
  });
});
