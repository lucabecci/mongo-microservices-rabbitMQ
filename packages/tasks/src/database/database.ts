import mongoose, { ConnectOptions, Mongoose } from 'mongoose'
export class Database{
    private _mongoose: Mongoose
    private _dbconfiguration: ConnectOptions
    private _db_uri: string
    constructor(db_uri: string){
        this._mongoose = mongoose
        this._dbconfiguration = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        this._db_uri = db_uri
    }

    public async getConnection(): Promise<void>{
        try{
            await this._mongoose.connect(this._db_uri, this._dbconfiguration)
            console.log('DB is connected')
        }
        catch(e){
            console.log(e)
        }
    }
}