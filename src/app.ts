import express, { Application } from 'express';
import { route as RouterUser } from './user/adapter/user.route';

const app: Application = express();

app.use('/user', RouterUser);

export default app;
