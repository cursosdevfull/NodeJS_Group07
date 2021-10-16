/* const http = require('http'); */

import http from 'http';
import fs from 'fs';
import path from 'path';

interface Route {
  url: string;
  method: string;
  execute: (req: http.IncomingMessage, res: http.ServerResponse) => void;
}

const callback = (req: http.IncomingMessage, res: http.ServerResponse) => {
  const routes: Route[] = [
    {
      url: '/home',
      method: 'GET',
      execute: (req: http.IncomingMessage, res: http.ServerResponse) => {
        res.setHeader('content-type', 'text/plain');
        res.writeHead(200);
        res.write('Home');
        res.end();
      },
    },
    {
      url: '/users',
      method: 'GET',
      execute: (req: http.IncomingMessage, res: http.ServerResponse) => {
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.write(`
          [
            {
              username: "user01"
            },
            {
              username: "user02"
            }
          ]
        `);
        res.end();
      },
    },
    {
      url: '/users',
      method: 'POST',
      execute: (req: http.IncomingMessage, res: http.ServerResponse) => {
        res.setHeader('content-type', 'text/plain');
        res.writeHead(201);
        res.write('User created');
        res.end();
      },
    },
    {
      url: '/download',
      method: 'GET',
      execute: (req: http.IncomingMessage, res: http.ServerResponse) => {
        res.setHeader('content-disposition', 'attachment; filename=file.csv');
        res.writeHead(200);
        res.write('username,firstname\nuser01,Sergio\nuser02,Javier');
        res.end();
      },
    },
    {
      url: '/pdf',
      method: 'GET',
      execute: (req: http.IncomingMessage, res: http.ServerResponse) => {
        const pathFile = path.join(__dirname, '../', 'public/manual.pdf');
        res.setHeader('content-type', 'application/pdf');
        const result = fs.readFileSync(pathFile);
        res.writeHead(200);
        res.write(result);
        res.end();
      },
    },
  ];

  const routeSelected = routes.find(
    (route) =>
      route.url.toLowerCase() === req.url.toLowerCase() &&
      route.method.toLowerCase() === req.method.toLowerCase()
  );

  if (routeSelected) {
    routeSelected.execute(req, res);
  } else {
    res.setHeader('content-type', 'text/plain');
    res.writeHead(404);
    res.write('Not found');
    res.end();
  }
};

const server: http.Server = http.createServer(callback);

server.listen(3000);
