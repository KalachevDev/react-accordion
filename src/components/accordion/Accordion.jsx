import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import AccordionTitle from '../accordionTitle';
import AccordionBody from '../accordionBody';
import { useExpandable } from './hooks';

const StyledWrapper = styled.div`
    border: 1px solid #eee;
    padding: 10px;
`;

/**
 * Details and summary tags are not supported by IE.
 * Moreover, styling of HTML tags might be a tough thing.
 * Here is accessibility-friendly accordion component.
 *
 * @property {string} title
 * @property {React.children} children
 */
const AccordionComponent = ({ title, children }) => {
    const { current: idPostfix } = useRef(uuid());
    const titleId = `accordionTitle-${idPostfix}`;
    const bodyId = `accordionBody-${idPostfix}`;
    const [isOpen, handleClick, handleKeyUp] = useExpandable();

    return (
        <StyledWrapper role="region" aria-labelledby={titleId}>
            <AccordionTitle
                id={titleId}
                onClick={handleClick}
                onKeyUp={handleKeyUp}
                containerId={bodyId}
                isOpen={isOpen}
            >
                {title}
            </AccordionTitle>
            <AccordionBody id={bodyId} isOpen={isOpen}>
                {children}
            </AccordionBody>
        </StyledWrapper>
    );
}

export default AccordionComponent;