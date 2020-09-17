import { useState } from 'react';

const ENTER_KEY_CODE = 13;

export const useExpandable = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const handleClick = () => setIsOpen(!isOpen);
    const handleKeyUp = event => {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();

            setIsOpen(!isOpen);
        }
    };

    return [isOpen, handleClick, handleKeyUp];
};