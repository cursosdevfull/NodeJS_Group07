/* const http = require('http'); */

import http from 'http';

const server: http.Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log('Origin request', req.url);
    console.log('Origin method', req.method);

    if (req.url === '/medics' && req.method === 'GET') {
      res.setHeader('content-type', 'text/plain');
      res.writeHead(200);
      //res.writeHead(200, { 'Content-type': 'text/plain' });
      res.write('Hola');
      res.write(' Mundo ');
      //res.end('Hello World');
    } else if (req.url === '/users') {
      res.setHeader('content-type', 'text/plain');
      res.writeHead(200);
      res.write('Lista');
      res.write(' Users ');
    }

    res.end();
  }
);

server.listen(3000);
