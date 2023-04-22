import React, { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useDebounce(value: any, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        },
        [value],
    );
    return debouncedValue;
}
