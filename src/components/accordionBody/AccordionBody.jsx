import React from 'react';
import styled, { keyframes } from 'styled-components';

const expandKeyframes = keyframes`
    0% {
        max-height: 0px;
    }

    100% {
        max-height: 1500px;
    }
`;

const StyledContainer = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    animation: 1s ${expandKeyframes} linear;
    overflow: hidden;
`;

const AccordionBody = ({ children, isOpen, ...rest }) => {
    return (<StyledContainer
        isOpen={isOpen}
        tabIndex={isOpen ? 0 : -1}
        aria-hidden={!isOpen}
        {...rest}
    >
        {children}
    </StyledContainer>);
};

export default AccordionBody;