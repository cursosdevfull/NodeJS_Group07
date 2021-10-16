import { Application } from 'express';
import http, { Server } from 'http';
import { AbstractServer } from '../shared/classes/abstract-server.class';

export default class ServerBootstrap extends AbstractServer {
  constructor(private app: Application) {
    super();
  }

  initialize(): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const server: Server = http.createServer(this.app);

      server
        .listen(3000)
        .on('listening', () => {
          console.log('Server is listening on port 3000');
          resolve(true);
        })
        .on('error', (err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}
