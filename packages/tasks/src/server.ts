import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { configuration, IConfiguration } from './config/configuration'
import {Database} from './database/database'
//routes
import IndexRouter from './routes/index.routes'
import TaskRouter from './routes/task.routes'
class Server {
    private _app: Application
    public _config: IConfiguration
    private _database: Database

    private _indexRouter: IndexRouter
    private _taskRouter: TaskRouter

    constructor(){
        this._app = express()
        this._config = configuration
        this._database =  new Database(this._config.DB_URI)

        this._indexRouter = new IndexRouter
        this._taskRouter = new TaskRouter

        this.initDatabase()
        this.initRabbit()
        this.initConfig()
        this.initRoutes()
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

    private initRoutes(){
        this._app.use('/', this._indexRouter._router)
        this._app.use('/task', this._taskRouter._router)
    }

    public run(){
        this._app.listen(this._app.get('port'), () => {
            console.log('Server on port:', this._app.get('port'))
        })
    }
}

export default Server

