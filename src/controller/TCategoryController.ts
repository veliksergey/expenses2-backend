import {AppDataSource} from '../data-source';
import {NextFunction, Request, Response} from 'express';
import {TCategory} from '../entity/TCategory';

export class TCategoryController {

	private tCategoryRepository = AppDataSource.getRepository(TCategory);

	async all(request: Request, response: Response, next: NextFunction) {
		return this.tCategoryRepository.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		const id = parseInt(request.params.id);

		const category = await this.tCategoryRepository.findOne({
			where: {id},
		});

		if (!category) {
			return {message: 'cannot find category'};
		}
		return category;
	}

	async save(request: Request, response: Response, next: NextFunction) {
		const {name, tags} = request.body;

		const category = Object.assign(new TCategory(), {
			name,
			tags,
		});

		return this.tCategoryRepository.save(category);
	}

	/*async remove(request: Request, response: Response, next: NextFunction) {
		const id = parseInt(request.params.id);

		let tCategoryToRemove = await this.tCategoryRepository.findOneBy({id});

		if (!tCategoryToRemove) {
			return 'this category not exist';
		}

		await this.tCategoryRepository.remove(tCategoryToRemove);

		return 'category has been removed';
	}*/

}