import { Application } from 'express';
import http, { Server } from 'http';
import { AbstractServer } from '../shared/classes/abstract-server.class';
import { IServer } from '../shared/interfaces/server.interface';

export default class ServerBootstrap extends AbstractServer {
  //export default class ServerBootstrap implements IServer {
  /*   app;
  constructor(app: Application) {
    this.app = app;
  } */

  constructor(private app: Application) {
    super();
  }

  initialize(): Promise<unknown> {
    const promise = new Promise((resolve, reject) => {
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

    return promise;
  }
}
