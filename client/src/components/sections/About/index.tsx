import Image from 'next/image';
import styled from 'styled-components';
import { useIsMobile } from '@src/hook/useIsMobile';
import Section from '..';
import config from '@src/libs/config.json';
import { TypeSkills, TypeSkill } from '@src/types/types';
import { theme } from '@src/styles/theme';

const About = () => {
  let parseJson = JSON.parse(JSON.stringify(config));
  const { skills }: TypeSkills = parseJson;
  const entries = Object.entries(skills);

  return (
    <Section title="About Me" id="about">
      <InnerWrapper>
        <div className="intro">
          <p>
            안녕하세요, 프론트엔드 개발자 엄혜진입니다. 저는 프론트엔드 개발자로서 어떻게 하면 사용자가 더 편리하고
            효율적으로 정보를 소비할 수 있을 지 고민합니다. 보다 나은 사용자 경험을 제공하기 위해 시맨틱 마크업을
            준수하고 정렬된 스타일, 인터랙티브한 기능을 구현하려 노력하고 있습니다. 좋아하는 일을 즐기면서 잘하는 것,
            제가 꿈꾸는 저의 모습입니다.
          </p>
        </div>
        <div className="skillsWrapper">
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
`;
