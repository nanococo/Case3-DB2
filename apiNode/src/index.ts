import App from './app';
import * as  http from 'http'
import { Logger } from './common/logger/logger'

const port = 5000;
const logger = new Logger();

App.set('port', port);
const server = http.createServer(App);
server.listen(port);

import './repositories/database'

server.on('listening', () => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${port}`;
    logger.info(`Listening on ${bind}`)
 });

module.exports = App;