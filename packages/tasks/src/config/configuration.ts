export interface IConfiguration {
    DB_URI: string,
    PORT: string | number,
    RABBIT_URI: string,
    MORGAN_MODE: string
}


export const configuration: IConfiguration = {
    DB_URI: process.env.DB_URI || 'mongodb://localhost/microservices_tasks',
    PORT: process.env.PORT || 4000,
    RABBIT_URI: process.env.RABBIT_URI || '',
    MORGAN_MODE: process.env.MORGAN_MODE || 'dev'
}