import localforage from 'localforage';
import { v4 as generateID } from 'uuid';

import { AddConsumptionProps, Consumption } from './types';

const CONSUMPTIONS = 'consumptions';

const consumptionsStore = localforage.createInstance({
    name: CONSUMPTIONS,
    driver: localforage.LOCALSTORAGE,
});

export default {
    async init() {
        const consumptions = await this.getAllConsumptions();
        if (!consumptions) {
            await consumptionsStore.setItem(CONSUMPTIONS, []);
        }
    },
    async getAllConsumptions() {
        return consumptionsStore.getItem(CONSUMPTIONS) as unknown as Array<Consumption>;
    },
    async addConsumption(props: AddConsumptionProps) {
        const id = generateID();
        const consumptions = await consumptionsStore.getItem(CONSUMPTIONS) as unknown as Array<Consumption>;
        consumptions.push({
            id,
            ...props,
        });
        await consumptionsStore.setItem(CONSUMPTIONS, consumptions);
        return id;
    },
    async removeConsumption(id: string) {
        const consumptions = await consumptionsStore.getItem(CONSUMPTIONS) as unknown as Array<Consumption>;
        await consumptionsStore.setItem(CONSUMPTIONS, consumptions.filter((el) => el.id !== id));
    },
};
