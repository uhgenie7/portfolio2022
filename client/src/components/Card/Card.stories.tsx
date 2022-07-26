import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '.';

export default {
  title: 'atom/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  id: 0,
  title: '웹앱 개발',
  language: ['HTML', 'CSS', 'Javascript', 'JQuery'],
  description: 'B2G 프로젝트',
  data: ['하이브리드 앱 개발', '전반적인 화면 및 기능 개발', 'Chart.js를 이용한 차트 화면 개발'],
  url: null,
};
