import { RouteObject } from 'react-router-dom';

import { IconName } from './utils';

type AdditionalProps = {
    title?: string
    icon?: IconName
};

export type RouterConfigItem = RouteObject & AdditionalProps;
export type RouterConfig = Array<RouterConfigItem>;
export type BrowserRouterConfig = Array<RouteObject>;
