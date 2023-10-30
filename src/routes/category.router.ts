import express, {Router} from 'express';
import TCategoryController from '../controllers/t-category.controller';

const router: Router = express.Router();

router.get('/', async (req, res) => {
	const tCategoryCtrl = new TCategoryController();
	const categories = await tCategoryCtrl.getCategories();
	return res.json(categories);
});

export default router;