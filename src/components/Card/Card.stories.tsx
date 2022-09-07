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
  title: '콩 생육 모니터링 애플리케이션 개발',
  date: '2021.6 ~ 2021.12',
  description: '에이아이에스 B2G(with 충북 괴산군 노지 스마트농업 실증단지) 콩 생육 모니터링 애플리케이션 개발',
  detail: [
    {
      id: 0,
      work: '표준 웹 기술을 사용할 수 있는 Cordova 프레임워크로 개발 및 배포',
      result: ['친숙한 HTML, CSS, JS 기술을 사용하여 개발 기간 단축'],
    },
    {
      id: 1,
      work: '사용자가 콩 생육 정보를 효율적으로 소비할 수 있도록 화면 및 기능 개발',
      result: [
        '날씨 데이터를 시각적으로 표현할 수 있는 Chart.js 라이브러리를 이용한 차트 화면 개발',
        '시스템 폰트 크기에 따른 스타일 대응',
      ],
    },
  ],
  language: ['HTML', 'CSS', 'Javascript', 'JQuery'],
  url: null,
};
