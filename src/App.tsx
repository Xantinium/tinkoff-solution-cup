import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { routerConfig } from './router';

export function no_tests_today(a: number, b: number) {
    return a + b;
}

function App() {
    return (
        <ChakraProvider>
            <RouterProvider router={routerConfig} />
        </ChakraProvider>
    );
}

export default App;
