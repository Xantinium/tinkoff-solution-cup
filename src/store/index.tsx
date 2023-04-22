import { configure } from 'mobx';
import categoriesStore from './categoriesStore';
import consumptionsStore from './consumptionsStore';

configure({
    enforceActions: 'never',
});

const store = {
    categoriesStore,
    consumptionsStore,
};

export default store;
