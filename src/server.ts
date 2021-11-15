import app from './app';
import ServerBootstrap from './bootstrap/server.bootstrap';
import DatabaseBootstrap from './bootstrap/database.bootstrap';

const serverBootstrap = new ServerBootstrap(app);
const instance = DatabaseBootstrap.getInstance();

(async () => {
  try {
    await serverBootstrap.initialize();
    await instance.getDB();
  } catch (error) {
    console.log(error);
  }
})();
