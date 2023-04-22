import localforage from 'localforage';
import { Category } from './types';

const CATEGORIES = 'categories';

const categoriesStore = localforage.createInstance({
    name: CATEGORIES,
    driver: localforage.LOCALSTORAGE,
});

export default {
    async init() {
        const categories = await this.getAllCategories();
        if (!categories) {
            await categoriesStore.setItem(CATEGORIES, []);
        }
    },
    async getAllCategories() {
        return categoriesStore.getItem(CATEGORIES) as unknown as Array<Category>;
    },
    async addCategory(name: string) {
        const categories = await categoriesStore.getItem(CATEGORIES) as unknown as Array<Category>;
        if (!categories.includes(name)) {
            categories.push(name);
        }
        await categoriesStore.setItem(CATEGORIES, categories);
    },
    async removeCategory(name: string) {
        const categories = await categoriesStore.getItem(CATEGORIES) as unknown as Array<Category>;
        await categoriesStore.setItem(CATEGORIES, categories.filter((el) => el !== name));
    },
};
