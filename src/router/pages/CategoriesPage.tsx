import React, { useCallback, useMemo, useState } from 'react';
import {
    Box, Input,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import useDebounce from '../../hooks/useDebounce';
import CategoryItem from '../../components/CategoryItem';
import Button from '../../components/Button';
import store from '../../store';

function CategoriesPage() {
    const [search, setSearch] = useState('');
    const { addCategory, categories, deleteCategory } = store.categoriesStore;

    const onDeleteFunc = (name: string) => function () {
        deleteCategory(name);
    };

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), []);
    // const onSearch = useDebounce(onChange); не получилось :C

    const filtredCategories = useMemo(
        () => categories.filter((el) => el.includes(search)),
        [search, categories],
    );

    return (
        <Box>
            <Box p="8" display="flex">
                <Input
                    onChange={onChange}
                    placeholder="Поиск категорий..."
                />
                <Button
                    px="8"
                    ml="4"
                    onClick={() => addCategory(search)}
                    disabled={search.length === 0 || categories.includes(search)}
                >
                    Добавить
                </Button>
            </Box>
            <Box px="8">
                {filtredCategories.map((el) => (
                    <CategoryItem
                        key={el}
                        name={el}
                        onDelete={onDeleteFunc(el)}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default observer(CategoriesPage);
