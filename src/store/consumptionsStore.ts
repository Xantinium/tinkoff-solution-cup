import {
    action, makeObservable, observable,
} from 'mobx';

import Service from '../service';
import { Consumption, AddConsumptionProps } from '../service/consumptions/types';

export class CategoriesStore {
    @observable
    public consumptions: Array<Consumption> = [];

    private _service = Service.consumptionsService;

    constructor() {
        this.init();
        makeObservable(this);
    }

    @action
    private async init() {
        await this._service.init();
        this.consumptions = await this._service.getAllConsumptions();
    }

    @action.bound
    public async addConsumption(props: AddConsumptionProps) {
        const id = await this._service.addConsumption(props);
        this.consumptions = [...this.consumptions, {
            ...props,
            id,
        }];
    }

    @action.bound
    public deleteConsumption(id: string) {
        this._service.removeConsumption(id);
        this.consumptions = this.consumptions.filter((el) => el.id !== id);
    }
}

export default new CategoriesStore();
