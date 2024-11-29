import { lazy } from "react";
import { IRoute } from "../../components/NavComponent"

const User = lazy(() => import(/* webpackChunkName:"User" */ '../pages/User'));
const Users = lazy(() => import(/* webpackChunkName:"Users" */ '../pages/Users'));

export const lazyloadRoutes: IRoute[] = [
    {
        path: '/',
        name: 'Users',
        Component: Users,
        to: 'users',
    },
    {
        path: '/users/:id',
        name: 'User',
        Component: User,
        to: 'users/:id',
    }
];