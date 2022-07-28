import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageCard from '.';

export default {
  title: 'atom/ImageCard',
  component: ImageCard,
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => <ImageCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  id: 0,
  image: 'godiva',
  title: 'Godiva',
  description: '자바스크립트의 원리를 이해하기 위해 순수 자바스크립트만을 이용해 개발한 홈페이지.',
  homepage: 'http://uhj1993.dothome.co.kr/godiva/',
  github: 'https://github.com/uhj1993/godiva',
  language: ['HTML', 'CSS', 'Javascript'],
};
