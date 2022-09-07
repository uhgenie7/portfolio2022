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
        <div className="skillsWrapper">
          <p>
            아래 <span className="hightlight">스킬</span>에 경험이 있고 새로운 것을 배우는데 관심이 있습니다.
            <br />
            계획을 세워 협업은 물론 혼자서 해결하는 자세를 갖추어 매일 발전해나가고 있습니다.
          </p>
          <ul className="skillSets">
            {entries &&
              entries.map((category, index) => (
                <ul className="skillSet" key={index}>
                  <li className="skillsCategory">{category[0].replace(/\b[a-z]/, (letter) => letter.toUpperCase())}</li>
                  <ul className="skillCategory">
                    {category.slice(1).map((skill) =>
                      skill.map(({ name, key, image, level }: TypeSkill) => (
                        <li key={key} className="skill">
                          <div>
                            <Image width={30} height={30} src={`/skills/${image}.png`} alt={name} />
                          </div>
                          <p>{name}</p>
                          <div>
                            <meter low={20} high={70} optimum={40} max="100" value={level}>
                              {level}
                            </meter>
                          </div>
                        </li>
                      )),
                    )}
                  </ul>
                </ul>
              ))}
          </ul>
        </div>
      </InnerWrapper>
    </Section>
  );
};

export default About;

const InnerWrapper = styled.div`
  .skillSets {
    margin: 20px 0 0 0;
  }

  .skillSet {
    margin-bottom: 8px;
  }

  .skillsCategory {
    color: var(--main);
    font-size: 16px;
  }

  .skillCategory {
    display: flex;
    flex-wrap: wrap;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    margin: 16px;
  }

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
