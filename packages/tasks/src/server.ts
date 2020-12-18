import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'

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
        this.initRabbit()
        this.initConfig()
    }

    private async initDatabase(): Promise<void>{
        await this._database.getConnection()
    }

    private initRabbit(): void{
        console.log('rabbit config')
    }

    private initConfig(): void{
        this._app.use(cors({
            credentials: true
        }))
        this._app.use(morgan(this._config.MORGAN_MODE))
        this._app.set('port', this._config.PORT)
    }

    public run(){
        this._app.listen(this._app.get('port'), () => {
            console.log('Server on port:', this._app.get('port'))
        })
    }
}

export default Server

