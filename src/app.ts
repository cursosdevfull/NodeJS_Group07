import express, { Application } from 'express';

const app: Application = express();

app.get('/home', (req, res) => {
  res.type('text/plain').status(200).send('Hello World');
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'John', age: 20 },
    { name: 'Bob', age: 30 },
  ];

  res.json(users);
});

app.post('/users', (req, res) => {
  const users = [
    { name: 'Carol', age: 20 },
    { name: 'Brad', age: 30 },
  ];

  res.json(users);
});

export default app;
