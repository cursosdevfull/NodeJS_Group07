import { Application } from 'express';
import app from '../app';
import http, { Server } from 'http';

export default class ServerBootstrap {
  /*   app;
  constructor(app: Application) {
    this.app = app;
  } */

  constructor(private app: Application) {}

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
