import {AppDataSource} from '../data-source';
import {NextFunction, Request, Response} from 'express';
import {Category} from '../entity/Category';

export class CategoryController {

	private categoryRepository = AppDataSource.getRepository(Category);

	async all(request: Request, response: Response, next: NextFunction) {
		return this.categoryRepository.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		const id = parseInt(request.params.id);

		const category = await this.categoryRepository.findOne({
			where: {id},
		});

		if (!category) {
			return 'cannot find category';
		}
		return category;
	}

	async save(request: Request, response: Response, next: NextFunction) {
		const {name, tags} = request.body;

		const category = Object.assign(new Category(), {
			name,
			tags,
		});

		return this.categoryRepository.save(category);
	}

	/*async remove(request: Request, response: Response, next: NextFunction) {
		const id = parseInt(request.params.id);

		let categoryToRemove = await this.categoryRepository.findOneBy({id});

		if (!categoryToRemove) {
			return 'this category not exist';
		}

		await this.categoryRepository.remove(categoryToRemove);

		return 'category has been removed';
	}*/

}