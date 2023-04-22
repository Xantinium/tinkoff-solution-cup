import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';

function Button(props: ButtonProps) {
    const { children, disabled } = props;
    return (
        <ChakraButton
            bgColor="yellow.400"
            _hover={{ bgColor: 'yellow.500' }}
            _active={{ bgColor: 'yellow.600' }}
            {...props}
            pointerEvents={disabled ? 'none' : 'initial'}
            opacity={disabled ? 0.6 : 1}
        >
            {children}
        </ChakraButton>
    );
}

export default Button;
