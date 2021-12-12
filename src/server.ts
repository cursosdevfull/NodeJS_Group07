import 'reflect-metadata';
import app from './app';
import ServerBootstrap from './bootstrap/server.bootstrap';
import Logger from './helpers/logger.helper';
import DatabaseBootstrap from './bootstrap/database.bootstrap';
import RedisBootstrap from './bootstrap/redis.bootstrap';

const serverBootstrap = new ServerBootstrap(app);
const databaseBootstrap = new DatabaseBootstrap();
const redisBootstrap = new RedisBootstrap();

(async () => {
  try {
    await serverBootstrap.initialize();
    await databaseBootstrap.initialize();
    await redisBootstrap.initialize();
  } catch (error) {
    Logger.error(error);
    databaseBootstrap.getConnection().close();
    redisBootstrap.getConnection().disconnect();
    process.exit(1);
  }
})();
