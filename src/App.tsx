import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
    },
    {
        path: '*',
        element: <div>404</div>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
