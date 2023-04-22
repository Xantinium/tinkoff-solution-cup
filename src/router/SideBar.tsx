import React from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';
import { toJS } from 'mobx';

import { buildSideBarConfig, getIconByName } from './utils';
import { RouterConfig, RouterConfigItem } from './types';
import store from '../store';

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

    const onDownload = () => {
        const data = JSON.stringify(toJS(store.consumptionsStore.consumptions), null, 2);
        const link = `text/json;charset=utf-8,${encodeURIComponent(data)}`;
        const a = document.createElement('a');
        a.download = 'data.json';
        a.href = `data:${link}`;
        a.click();
    };

    return (
        <Box width={300} height="100%" bgColor="gray.100">
            {sideBarConfig.map((el) => <SideBarItem key={el.title} config={el} />)}
            <Box
                display="flex"
                alignItems="center"
                cursor="pointer"
                pos="absolute"
                bottom={4}
                left={12}
                onClick={onDownload}
            >
                <DownloadIcon mr="2" />
                <Text fontSize="14">Выгрузить расходы</Text>
            </Box>
        </Box>
    );
}

export default SideBar;
