import IBootstrap from './interfaces/bootstrap.interface';
import yenv from 'yenv';
import Logger from '../helpers/logger.helper';
import IORedis from 'ioredis';

const env = yenv();

let client: any;

export default class RedisBootstrap implements IBootstrap {
  private client: IORedis.Redis;

  initialize(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      const connectionParams = {
        host: env.DATABASES.REDIS.HOST,
        port: env.DATABASES.REDIS.PORT,
        password: env.DATABASES.REDIS.PASS,
        maxRetriesPerRequest: 5,
      };

      this.client = new IORedis(connectionParams);

      this.client
        .on('connect', () => {
          Logger.info('Redis connected');
          resolve(true);
        })
        .on('error', (err: Error) => {
          Logger.error(err);
          reject(err);
        });

      client = this.client;
    });

    return promise;
  }

  getConnection() {
    return this.client;
  }

  static async get(key: string) {
    return await client.get(key);
  }

  static async set(key: string, value: any) {
    await client.set(key, value, 'PX', 24 * 60 * 60 * 1000);
  }

  static async clear() {
    const keys = await client.keys('*');
    const pipeline = client.pipeline();

    keys.forEach((key: string) => {
      pipeline.del(key);
    });

    return pipeline.exec();
  }
}
