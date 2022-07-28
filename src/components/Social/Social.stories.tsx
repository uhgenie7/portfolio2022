import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Social from '.';

export default {
  title: 'atom/Social',
  component: Social,
} as ComponentMeta<typeof Social>;

const Template = () => <Social />;

export const Primary = Template.bind({});
