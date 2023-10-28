import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/Category"

import dotenv from 'dotenv';
dotenv.config();

console.log('------------');
console.log('TEST');
console.log('port:', process.env.DB_USERNAME);
console.log('------------');

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
    logging: process.env.DB_LOGGING === 'true' || false,
    entities: [Category],
    migrations: [],
    subscribers: [],
})
