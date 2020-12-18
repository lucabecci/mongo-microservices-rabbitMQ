import {Router, IRouter} from 'express'
import IndexController from '../controllers/index.controller'

class IndexRouter {
    public _router: IRouter
    public _indexController: IndexController
    constructor(){
        this._router = Router()

        this._indexController = new IndexController

        this.routes()
    }

    private routes(){
        this._router.get('/', this._indexController.getIndex)
    }
}

export default IndexRouter