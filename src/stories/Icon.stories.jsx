import React from 'react';

import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
};

const Template = (args) => <Icon {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  icon: 'question',
};
