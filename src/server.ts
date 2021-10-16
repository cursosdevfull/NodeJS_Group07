import app from './app';
import ServerBootstrap from './bootstrap/server.bootstrap';

const serverBootstrap = new ServerBootstrap(app);

(async () => {
  try {
    const response = await serverBootstrap.initialize();
    console.log('fin de initialize', response);
  } catch (error) {
    console.log(error);
  }
})();
