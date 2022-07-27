import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

const Template = () => <Footer />;

export const Primary = Template.bind({});
