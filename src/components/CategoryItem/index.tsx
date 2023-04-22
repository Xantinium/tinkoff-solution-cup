import React, { useRef, useState } from 'react';
import {
    Box,
    Text,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

interface Props {
    name: string
    onDelete: () => void
}

function CategoryItem(props: Props) {
    const { name, onDelete } = props;
    const [isOpen, setIsOpen] = useState(false);
    const cancelRef = useRef(null);

    const onClickHandler = () => {
        setIsOpen(true);
    };

    const onDelelteHandler = () => {
        setIsOpen(false);
        setTimeout(onDelete, 300);
    };

    return (
        <Box display="flex" _notFirst={{ mt: 4 }}>
            <Text fontSize={18} flex={1}>{name}</Text>
            <DeleteIcon color="red" boxSize="6" cursor="pointer" onClick={onClickHandler} />
            <AlertDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                leastDestructiveRef={cancelRef}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>Подтвердите действие</AlertDialogHeader>
                        <AlertDialogBody>
                            Вы действительно хотите удалить категорию
                            {' '}
                            <b>{name}</b>
                            ?
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={() => setIsOpen(false)}>Отмена</Button>
                            <Button colorScheme="red" onClick={onDelelteHandler} ml={3}>Удалить</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    );
}

export default CategoryItem;
