import App from './app';
import * as  http from 'http'
import { Logger } from './common'
import * as express from 'express';
import * as path from "path";
import './repositories/database'

const port = 5000;
const logger = new Logger();

App.set('port', port);
App.use(express.static(path.join(__dirname, './content')));

const server = http.createServer(App);
server.listen(port);

server.on('listening', () => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${port}`;
    logger.info(`Listening on ${bind}`)
 });

module.exports = App;
