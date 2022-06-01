import express from 'express';
import routes from './routes';



import './database'; //  NAO FOI DECLARADO NA AULA!!!


class App {
    constructor() {
        this.server = express();
        this.midlewares();
        this.routes();
    }
    midlewares() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }



}

export default new App().server;