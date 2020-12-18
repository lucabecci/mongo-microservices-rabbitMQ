export interface IConfiguration {
    DB_URI: string,
    PORT: string | number,
    RABBIT_URI: string
}


export const configuration = {
    DB_URI: process.env.DB_URI || 'mongodb://localhost/microservices_tasks',
    PORT: process.env.PORT || 4000,
    RABBIT_URI: process.env.RABBIT_URI || ''
}