import { createBrowserRouter } from 'react-router-dom';

import { buildRouterConfig, buildSideBarConfig } from './utils';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import { RouterConfig } from './types';

const router: RouterConfig = [
    {
        path: '/',
        element: <HomePage />,
        title: 'Главная',
        icon: 'home',
    },
    {
        path: '/categories',
        element: <CategoriesPage />,
        title: 'Категории расходов',
        icon: 'categories',
    },
    {
        path: '*',
        element: <div>404</div>,
    },
];

export const sideBarConfig = buildSideBarConfig(router);

export const routerConfig = createBrowserRouter(buildRouterConfig(router));
