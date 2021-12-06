import { Application } from 'express';
import IBootstrap from './interfaces/bootstrap.interface';
import http from 'http';
import yenv from 'yenv';
import Logger from '../helpers/logger.helper';
import IAddress from './interfaces/addressinfo.interface';

const env = yenv();

export default class ServerBootstrap implements IBootstrap {
  constructor(private app: Application) {}

  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);

      server
        .listen(env.PORT)
        .on('listening', () => {
          Logger.info(
            `Server is running on port ${(server.address() as IAddress).port}`
          );

          resolve(true);
        })
        .on('error', (err: Error) => {
          Logger.error(`Server error: ${err}`);
          reject(err);
        });
    });
  }
}
