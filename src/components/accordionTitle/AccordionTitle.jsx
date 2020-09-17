import React from 'react';
import styled from 'styled-components';
import ArrowSvg from './arrow.svg';

const StyledTitle = styled.h4`
    cursor: pointer;
    margin: 0;
`;

const StyledMarker = styled.img`
    width: 10px;
    transform: ${props => props.isOpen ? 'rotate(90deg)' : 'initial'};
    transition: transform .1s;
    margin-right: 5px;
`;

const AccordionTitle = ({ children, isOpen, containerId, ...rest }) => {
    return (<StyledTitle
        tabIndex="0"
        aria-controls={containerId}
        aria-expanded={isOpen}
        {...rest}
    >
        <StyledMarker src={ArrowSvg} alt="Arrow" isOpen={isOpen} />
        {children}
    </StyledTitle>);
};

export default AccordionTitle;