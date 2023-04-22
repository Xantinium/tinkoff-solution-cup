import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
    Box, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalBody, Button, Input,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import _store from '../../store';
import FormStore from './store';

interface Props {
    store: FormStore
}

function AddConsumption(props: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const { store } = props;

    const onCreateHandler = () => {
        setIsOpen(false);
        _store.consumptionsStore.addConsumption(store.getData());
    };

    const onTitleChange = store.updateFieldFunc('title');
    const onAmountChange = store.updateFieldFunc('amount');

    return (
        <>
            <Box
                w={12}
                height={12}
                bgColor="yellow.400"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                pos="absolute"
                bottom={8}
                right={8}
                onClick={() => setIsOpen(true)}
            >
                <AddIcon />
            </Box>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Создание Расхода</ModalHeader>
                        <ModalBody display="flex" flexDirection="column" rowGap={4}>
                            <Input value={store.title} placeholder="Наименование" onChange={(e) => onTitleChange(e.target.value)} />
                            <Input value={store.amount} placeholder="Величина расхода" onChange={(e) => onAmountChange(e.target.value)} />
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => setIsOpen(false)}>Отмена</Button>
                            <Button colorScheme="yellow" onClick={onCreateHandler} ml={3}>Создать</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    );
}

export default observer(AddConsumption);
