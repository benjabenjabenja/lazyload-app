//Components"
import LazyloadLayout from "../lazyload-module/layout/LazyloadLayout";
import { lazyloadRoutes } from "../lazyload-module/router/routes";
import { About, Home } from "../pages";
//Utils:
import { IRoute } from "../utils/utils";

export const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home',
		Component: Home,
		to: '',
	},
	{
		path: '/about',
		name: 'About',
		Component: About,
		to: 'about',
	},
    {
        path: '/lazyload/',
        name: 'Lazy Load',
        Component: LazyloadLayout,
        to: 'lazyload',
        children: lazyloadRoutes
    }
];