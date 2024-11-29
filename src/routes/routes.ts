//Components"
import { Users } from "../lazyload-module/pages";
import { About, Home } from "../pages";
//Utils:
import { IRoute } from "../utils/utils";

export const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home',
		Component: Home,
		to: '/',
	},
	{
		path: '/about',
		name: 'About',
		Component: About,
		to: '/about',
	},
	{
		path: '/users/',
		name: 'Users',
		Component: Users,
		to: '/users/',
	}
];