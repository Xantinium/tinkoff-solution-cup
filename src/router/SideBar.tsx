import React from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

import { buildSideBarConfig, getIconByName } from './utils';
import { RouterConfig, RouterConfigItem } from './types';

interface SideBarItemProps {
    config: RouterConfigItem
}

function SideBarItem(props: SideBarItemProps) {
    const { config } = props;
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === config.path;

    return (
        <Box
            display="flex"
            alignItems="center"
            p="4"
            _hover={{ bgColor: 'gray.200' }}
            cursor="pointer"
            onClick={() => navigate(config.path || '/')}
            bgColor={isActive ? 'gray.200' : 'unset'}
        >
            {getIconByName(config.icon)}
            <Text ml="4" fontWeight={isActive ? 'bold' : 'normal'}>{config.title}</Text>
        </Box>
    );
}

interface SideBarProps {
    config: RouterConfig
}

function SideBar(props: SideBarProps) {
    const { config } = props;
    const sideBarConfig = buildSideBarConfig(config);

    return (
        <Box width={300} height="100%" bgColor="gray.100">
            {sideBarConfig.map((el) => <SideBarItem key={el.title} config={el} />)}
        </Box>
    );
}

export default SideBar;
