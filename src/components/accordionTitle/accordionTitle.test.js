import React from 'react';
import { shallow, mount } from 'enzyme';
import AccordionTitle from './index';

test('it renders content', () => {
    const wrapper = mount(<AccordionTitle>title</AccordionTitle>);

    expect(wrapper.getDOMNode()).toHaveTextContent('title');
});

test('it handles click', () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(<AccordionTitle onClick={clickHandler}>title</AccordionTitle>);

    wrapper.simulate('click');

    expect(clickHandler).toHaveBeenCalled();
});