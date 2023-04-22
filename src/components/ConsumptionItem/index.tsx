import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Consumption } from '../../service/consumptions/types';

function ConsumptionItem(props: Consumption) {
    const {
        amount, categories, currency, date, id, title,
    } = props;

    return (
        <Box _notFirst={{ mt: '4' }}>
            <Text>
                {title}
                <br />
                {new Date(date).toLocaleDateString()}
                <br />
                categories:
                {categories.join(',')}
                <br />
                {amount}
                {currency}
            </Text>
        </Box>
    );
}

export default ConsumptionItem;
