import {
    action, makeObservable, observable,
} from 'mobx';

import { AddConsumptionProps, Consumption, Currency } from '../../service/consumptions/types';
import { Category } from '../../service/categories/types';

export class FormStore {
    @observable
    public title: string;

    @observable
    public currency: Currency;

    @observable
    public date: number;

    @observable
    public categories: Category[];

    @observable
    public amount: string;

    constructor() {
        makeObservable(this);
        this.title = '';
        this.currency = 'rub';
        this.date = Date.now();
        this.categories = [];
        this.amount = '';
    }

    @action.bound
    public getData(): AddConsumptionProps {
        return {
            amount: Number(this.amount),
            categories: this.categories,
            currency: this.currency,
            date: this.date,
            title: this.title,
        };
    }

    @action.bound
    public updateFieldFunc<T extends keyof AddConsumptionProps>(field: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (v: any) => {
            this[field] = v;
        };
    }
}

export default FormStore;
