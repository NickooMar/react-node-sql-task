import { createPool } from 'mysql2/promise'

import dotenv from 'dotenv'; //Importante al utilizar dotenv ejecutarlo en el archivo que contiene las variables de entorno.

dotenv.config()

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
})

