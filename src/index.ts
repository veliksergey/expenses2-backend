import * as bodyParser from 'body-parser';
import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import path from 'path';
import {AppDataSource} from './data-source';
import {Routes} from './routes';

import dotenv from 'dotenv';
dotenv.config({
	path: `.env.${process.env.NODE_ENV}`
});

// ToDo: cors?

const PORT = process.env.APP_PORT || 8008;
const UPLOAD_DIR = path.join(__dirname, '../uploads');

AppDataSource.initialize().then(async () => {

	// create express app
	const app: Application = express();
	app.use(bodyParser.json());
  app.use(morgan('tiny'));
  app.use(express.json());
  app.use(express.static(UPLOAD_DIR));

	// register express routes from defined application routes
	Routes.forEach(route => {
		(app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
			const result = (new (route.controller as any))[route.action](req, res, next);
			if (result instanceof Promise) {
				result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

			} else if (result !== null && result !== undefined) {
				res.json(result);
			}
		});
	});


	// start express server
	app.listen(PORT);

	console.log(`Serves on http://localhost:${PORT}`);

}).catch(error => console.error(error));
