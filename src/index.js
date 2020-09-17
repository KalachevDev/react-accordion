import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Accordion from './components/accordion';

const StyledAppContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;

ReactDOM.render(
  <React.StrictMode>
    <StyledAppContainer>
      <Accordion title="Accordion">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum magna a ante tempor placerat. Sed interdum metus velit, in pellentesque lacus bibendum nec. Integer vitae consequat velit, nec feugiat est. Vestibulum lobortis aliquet lacinia. Suspendisse malesuada ultricies justo, non dignissim est lobortis quis. Aliquam at tellus eget mi condimentum.
    </Accordion>
      <Accordion title="Accordion">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum magna a ante tempor placerat. Sed interdum metus velit, in pellentesque lacus bibendum nec. Integer vitae consequat velit, nec feugiat est. Vestibulum lobortis aliquet lacinia. Suspendisse malesuada ultricies justo, non dignissim est lobortis quis. Aliquam at tellus eget mi condimentum.
  </Accordion>
    </StyledAppContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
