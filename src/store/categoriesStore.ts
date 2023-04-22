import {
    action, makeObservable, observable,
} from 'mobx';

import { Category } from '../service/categories/types';
import Service from '../service';

export class CategoriesStore {
    @observable
    public categories: Array<Category> = [];

    private _service = Service.categoriesService;

    constructor() {
        this.init();
        makeObservable(this);
    }

    @action
    private async init() {
        await this._service.init();
        this.categories = await this._service.getAllCategories();
    }

    @action.bound
    public addCategory(name: string) {
        this._service.addCategory(name);
        if (this.categories.includes(name)) return;
        this.categories = [...this.categories, name];
    }

    @action.bound
    public deleteCategory(name: string) {
        this._service.removeCategory(name);
        this.categories = this.categories.filter((el) => el !== name);
    }
}

export default new CategoriesStore();
