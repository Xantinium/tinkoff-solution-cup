import React, {
    useCallback, useMemo, useRef, useState,
} from 'react';
import {
    Box, Input, Switch, Text,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import store from '../../store';
import ConsumptionItem from '../../components/ConsumptionItem';
import AddConsumption from '../../components/AddConsumption';
import FormStore from '../../components/AddConsumption/store';

function HomePage() {
    const [search, setSearch] = useState('');
    const [ascending, setAscending] = useState(false);
    const { consumptions } = store.consumptionsStore;

    const formStore = useRef(new FormStore());

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), []);

    const filtredAndSortedConsumptions = useMemo(() => {
        const filtred = consumptions.filter((el) => el.title.includes(search));
        filtred.sort((a, b) => (a.date - b.date) * (ascending ? 1 : -1));
        return filtred;
    }, [search, consumptions, ascending]);

    return (
        <Box>
            <Box display="flex" alignItems="center" p={4}>
                <Input
                    flex={1}
                    onChange={onChange}
                    placeholder="Поиск по наименованию..."
                />
                <Text w={32} mx={4}>Сначала новые</Text>
                <Switch isChecked={ascending} onChange={() => setAscending((prev) => !prev)} />
            </Box>
            <Box p="8">
                {filtredAndSortedConsumptions.map((el) => (
                    <ConsumptionItem key={el.id} {...el} />
                ))}
            </Box>
            <AddConsumption store={formStore.current} />
        </Box>
    );
}

export default observer(HomePage);
