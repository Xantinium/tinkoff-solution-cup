import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';

function Button(props: ButtonProps) {
    const { children } = props;
    return (
        <ChakraButton
            bgColor="yellow.300"
            _hover={{ bgColor: 'yellow.400' }}
            _active={{ bgColor: 'yellow.500' }}
            {...props}
        >
            {children}
        </ChakraButton>
    );
}

export default Button;
