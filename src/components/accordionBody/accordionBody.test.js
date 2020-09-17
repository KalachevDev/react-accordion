import React from 'react';
import { mount } from 'enzyme';
import AccordionBody from './index';

test('is renders content', () => {
    const wrapper = mount(<AccordionBody isOpen={false}>body</AccordionBody>);
    expect(wrapper.getDOMNode()).toHaveTextContent('body');
});

test('it renders aria-hidden attribute = true if isOpen is false', () => {
    const wrapper = mount(<AccordionBody isOpen={false} />);
    expect(wrapper.getDOMNode()).toHaveAttribute('aria-hidden', 'true');
});

test('it renders aria-hidden attribute = false if isOpen is true', () => {
    const wrapper = mount(<AccordionBody isOpen={true} />);
    expect(wrapper.getDOMNode()).toHaveAttribute('aria-hidden', 'false');
});