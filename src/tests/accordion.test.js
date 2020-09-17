import React from 'react';
import { shallow } from 'enzyme';
import { axe } from 'jest-axe';
import Accordion from '../components/accordion';
import AccordionTitle from '../components/accordionTitle';
import AccordionBody from '../components/accordionBody';

test('it renders title', () => {
    const wrapper = shallow(<Accordion title="title">Body</Accordion>);
    
    expect(wrapper.find(AccordionTitle).exists()).toBeTruthy();
});

test('it renders body', () => {
    const wrapper = shallow(<Accordion>Body</Accordion>);
    
    expect(wrapper.find(AccordionBody).exists()).toBeTruthy();
});

test('it expands body when user clicks on title', () => {
    const wrapper = shallow(<Accordion title="title">Body</Accordion>);

    expect(wrapper.find(AccordionBody).prop('isOpen')).toBeFalsy();
    wrapper.find(AccordionTitle).simulate('click');
    expect(wrapper.find(AccordionBody).prop('isOpen')).toBeTruthy();
});

test('it passes a11y rules', async () => {
    const wrapper = shallow(<Accordion title="title">Body</Accordion>);

    expect(await axe(wrapper.html())).toHaveNoViolations();
});