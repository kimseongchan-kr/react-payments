import React from 'react';

import InputGroup from './InputGroup';

import '../styles/input.css';

export default {
  component: InputGroup,
  title: 'InputGroup',
};

const Template = (args) => (
  <InputGroup {...args}>
    <input type="text" className="input-basic" value="hi" />
  </InputGroup>
);

export const Playground = Template.bind({});
Playground.args = {
  label: {
    leftLabel: 'left-titile',
    rightLabel: 'right-title',
  },
  className: 'input-box',
  detachInput: true,
  icon: 'question',
};
