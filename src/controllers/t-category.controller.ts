import {TCategory} from '../entities/t-category.entity';
import {getRepository, Repository} from 'typeorm';
import {AppDataSource} from '../data-source';

export default class TCategoryController {

	// @Get('/categories')
	getCategories(): Promise<TCategory[]> {
		return AppDataSource.manager.find(TCategory);
	}

}