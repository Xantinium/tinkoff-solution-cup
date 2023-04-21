import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '*',
        element: <div>404</div>,
    },
]);

export default router;
