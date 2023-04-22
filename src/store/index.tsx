import { configure } from 'mobx';
import categoriesStore from './categoriesStore';

configure({
    enforceActions: 'never',
});

const store = {
    categoriesStore,
};

export default store;
