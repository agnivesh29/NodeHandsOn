import { createServer } from 'http';
import route from './route.js';

const nodeServer = createServer(route);

nodeServer.listen(8000);