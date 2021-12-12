import express, { Request, Response } from 'express';
import { route as RouteUser } from './modules/user/adapter/user.route';
import { route as RouteMedic } from './modules/medic/adapter/medic.route';
import { route as RouteDriver } from './modules/driver/adapter/driver.route';
import { route as RouteRole } from './modules/role/adapter/role.route';
import { route as RouteAuth } from './modules/auth/adapter/auth.route';
import ErrorHandler from './helpers/error.helper';
import RedisBootstrap from './bootstrap/redis.bootstrap';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', RouteUser);
app.use('/medics', RouteMedic);
app.use('/roles', RouteRole);
app.use('/drivers', RouteDriver);
app.use('/auth', RouteAuth);

app.get('/health', (req: Request, res: Response) => res.send('I am alive!'));

app.get('/invalidation-cache', async (req: Request, res: Response) => {
  await RedisBootstrap.clear();
  res.send('Cache invalidated!');
});

app.use(ErrorHandler.notFound);
app.use(ErrorHandler.generic);

export default app;
