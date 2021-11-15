import { Application } from 'express';
import http, { Server } from 'http';
import { AbstractServer } from '../shared/classes/abstract-server.class';
import yenv from 'yenv';

const env = yenv();

export default class ServerBootstrap extends AbstractServer {
  constructor(private app: Application) {
    super();
  }

  initialize(): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const server: Server = http.createServer(this.app);

      server
        .listen(env.PORT)
        .on('listening', () => {
          console.log(`Server is listening on port ${env.PORT}`);
          resolve(true);
        })
        .on('error', (err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}
