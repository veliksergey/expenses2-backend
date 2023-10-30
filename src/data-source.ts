import 'reflect-metadata';
import {DataSource} from 'typeorm';
// import {TCategory} from './entities/t-category.entity';
// import {T} from './entities/t.entity';

import dotenv from 'dotenv';

dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: Number(process.env.DB_PORT) || 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
	logging: process.env.DB_LOGGING === 'true' || false,
	entities: ['src/entities/**/*.entity.ts'],
	// entities: [TCategory, T],
	migrations: [],
	subscribers: [],
});
