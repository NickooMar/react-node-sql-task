import { createPool } from 'mysql2/promise'

import dotenv from 'dotenv'; //Importante al utilizar dotenv ejecutarlo en el archivo que contiene las variables de entorno.

dotenv.config()

export const pool = createPool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
})

