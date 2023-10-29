import {TCategoryController} from './controller/TCategoryController';

export const Routes = [
	{
		method: 'get',
		route: '/tCategories',
		controller: TCategoryController,
		action: 'all',
	},
	{
		method: 'get',
		route: '/tCategories/:id',
		controller: TCategoryController,
		action: 'one',
	},
	{
		method: 'post',
		route: '/tCategories',
		controller: TCategoryController,
		action: 'save',
	},
	/*{
		method: 'delete',
		route: '/tCategories/:id',
		controller: TCategoryController,
		action: 'remove',
	},*/
];