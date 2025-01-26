import * as dotenv from 'dotenv'
dotenv.config()

export default {
    port : process.env.PORT || 3000,
    db : {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT || 5432,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    },
    nodeEnv : process.env.NODE_ENV,
}