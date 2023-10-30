import express, {Router} from 'express';
import CategoryRouter from './category.router';

const router: Router = express.Router();

router.use('/tCategories', CategoryRouter);

export default router;