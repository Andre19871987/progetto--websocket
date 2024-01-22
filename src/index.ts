import express from 'express';
import http from 'http';
import { routes } from './routes';
import { websockets } from './websockets';

const app = express();
const server = http.createServer(app);
const port = 8080;
app.use(express.json());

routes(app);
websockets(server);

// Servire il frontend
app.use(express.static(`${__dirname}/../public/`));

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
