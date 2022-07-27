import React from 'react';
import { ComponentMeta } from '@storybook/react';
import ThemeToogle from '.';

export default {
  title: 'atom/ThemeToogle',
  component: ThemeToogle,
} as ComponentMeta<typeof ThemeToogle>;

const Template = () => <ThemeToogle />;

export const Primary = Template.bind({});
