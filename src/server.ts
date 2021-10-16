// import http from 'http';
import app from './app';
import ServerBootstrap from './bootstrap/server.bootstrap';

// const server: http.Server = http.createServer(app);

const serverBootstrap = new ServerBootstrap(app);

/* try { */
serverBootstrap.initialize().then(
  (response: boolean) => {
    console.log('response', response);
    console.log('Confirm... server is running');
  },
  (error) => {
    console.log('Is true... the server is not running');
  }
);
// server.listen(3000, () => console.log('Server is running on port 3000'));
/* } catch (error) {
  console.log('Ocurrió un error');
} */
