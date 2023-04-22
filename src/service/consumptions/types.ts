import { Category } from '../categories/types';

type Currency = 'usd' | 'rub' | 'eur';

export type Consumption = {
    id: string,
    date: number
    categories: Category[]
    amount: number
    currency: Currency
    title: string
};

export type AddConsumptionProps = Omit<Consumption, 'id'>;
