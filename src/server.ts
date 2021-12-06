import 'reflect-metadata';
import app from './app';
import ServerBootstrap from './bootstrap/server.bootstrap';
import Logger from './helpers/logger.helper';
import DatabaseBootstrap from './bootstrap/database.bootstrap';

const serverBootstrap = new ServerBootstrap(app);
const databaseBootstrap = new DatabaseBootstrap();

(async () => {
  try {
    await serverBootstrap.initialize();
    await databaseBootstrap.initialize();
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }
})();
