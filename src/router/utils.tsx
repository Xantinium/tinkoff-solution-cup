import { MoonIcon, TimeIcon, HamburgerIcon } from '@chakra-ui/icons';

import Layout from './Layout';
import { BrowserRouterConfig, RouterConfig } from './types';

export function buildRouterConfig(obj: RouterConfig): BrowserRouterConfig {
    return obj.map((el) => ({
        ...el,
        element: <Layout>{el.element}</Layout>,
    }));
}

export function buildSideBarConfig(obj: RouterConfig): RouterConfig {
    return obj.filter((el) => el.path !== '*');
}

const ICONS = {
    home: <MoonIcon boxSize="6" />,
    history: <TimeIcon boxSize="6" />,
    categories: <HamburgerIcon boxSize="6" />,
};

export type IconName = keyof typeof ICONS;

export function getIconByName(name?: IconName) {
    if (!name) return null;
    return ICONS[name];
}
