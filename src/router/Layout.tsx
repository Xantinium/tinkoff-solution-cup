import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import SideBar from './SideBar';
import { sideBarConfig } from '.';

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props;

    return (
        <Box display="flex" w="100vw" h="100vh" flexDirection="column">
            <Box
                w="100%"
                h={90}
                bgColor="yellow.400"
                display="flex"
                alignItems="center"
                px="8"
            >
                <Text color="black" fontSize="3xl" fontWeight="bold">Tinkoff Solution Cup</Text>
            </Box>
            <Box w="100%" flex={1} display="flex">
                <SideBar config={sideBarConfig} />
                <Box flex={1}>{children}</Box>
            </Box>
        </Box>
    );
}

export default Layout;
