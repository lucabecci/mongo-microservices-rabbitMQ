import express, { Application } from 'express'
import { configuration, IConfiguration } from './config/configuration'

import {Database} from './database/database'

class Server {
    private _app: Application
    public _config: IConfiguration
    private _database: Database

    constructor(){
        this._app = express()
        this._config = configuration
        this._database =  new Database(this._config.DB_URI)

        this.initDatabase()
    }

    private async initDatabase(){
        await this._database.getConnection()
    }

    private initRabbit(){
        
    }

    private initConfig(){

    }
}

