import app from './app';
import ServerBootstrap from './bootstrap/server.bootstrap';
import DatabaseBootstrap from './bootstrap/database.bootstrap';

const serverBootstrap = new ServerBootstrap(app);
const instance = DatabaseBootstrap.getInstance();

(async () => {
  try {
    const response = await serverBootstrap.initialize();
    await instance.getDB();
    console.log('fin de initialize', response);
  } catch (error) {
    console.log(error);
  }
})();
