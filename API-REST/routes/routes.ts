import * as express from 'express';
import { Logger } from '../common';
import {kindnessrouter} from './kindness';
import { subastasrouter } from './subastas';

class Routes {

    public express: express.Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.logger = new Logger();

        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.use('/kind', kindnessrouter);
        this.express.use('/articles', subastasrouter);
        this.logger.info("Kindness route loaded");
    }
}

export default new Routes().express;

