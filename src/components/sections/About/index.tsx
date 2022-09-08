import Image from 'next/image';
import styled from 'styled-components';
import Section from '..';
import config from '@src/fixtures/config.json';
import { TypeSkills, TypeSkill } from '@src/types/types';
import mixins from '@src/styles/mixin';

const About = () => {
  let parseJson = JSON.parse(JSON.stringify(config));
  const { skills }: TypeSkills = parseJson;
  const entries = Object.entries(skills);

  return (
    <Section title="About Me" id="about">
      <InnerWrapper>
        <div className="intro">
          <p>
            안녕하세요, <span className="hightlight">프론트엔드 개발자</span> 엄혜진입니다.
          </p>
          <p>저는 프론트엔드 개발자로서</p>
          <ul className="abilities">
            <li className="ability">
              어떻게 하면 사용자가 더 편리하고 효율적으로 정보를 소비할 수 있을 지 고민합니다.
            </li>
            <li className="ability">
              항상 더 좋은 코드가 없는지 고민하면서 문제에 직면하면 해결할 때까지 몰두하며 개발합니다.
            </li>
            <li className="ability">
              기억보다 기록이 중요함을 알기에 기술 블로그를 운영을 하고 있으며 가치있는 커밋을 중요시합니다.
            </li>
          </ul>
        </div>
      </InnerWrapper>
    </Section>
  );
};

export default About;

const InnerWrapper = styled.div`
  .hightlight {
    ${mixins.halfHL}
  }

  .abilities {
    margin: 1rem;
  }

  .ability {
    counter-increment: index 1;
    padding: 0.5em 0;
    &:before {
      content: '0' counter(index) '.';
      margin-right: 5px;
      text-align: right;
      color: var(--main);
    }
  }
`;
