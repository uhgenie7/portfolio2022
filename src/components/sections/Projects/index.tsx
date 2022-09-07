import styled from 'styled-components';
import Section from '..';
import mixins from '@src/styles/mixin';
import projects from '@src/fixtures/projects.json';
import ImageCard from '@src/components/ImageCard';
import type { TypeToyProjects } from '@src/types/types';

const Projects = () => {
  let parseJson = JSON.parse(JSON.stringify(projects));
  const { projects: toyProject }: TypeToyProjects = parseJson;

  return (
    <Section title="My Projects" id="projects">
      <InnerWrapper>
        <p>
          웹이 기술적으로 빠르게 발전함에 따라 새롭고 다양한 기능을 찾아서 적용해보는 것을 즐깁니다.
          <br />
          작업물이 늘어날수록 발전하는 모습을 볼 수 있습니다. <span className="hightlight">Githube</span>에서 더 자세히
          확인할 수 있습니다.
        </p>
        <ul>
          {[...toyProject].reverse().map(({ id, image, title, description, homepage, github, language }) => (
            <ImageCard
              image={image}
              id={id}
              key={id}
              title={title}
              description={description}
              homepage={homepage}
              language={language}
              github={github}
            />
          ))}
        </ul>
      </InnerWrapper>
    </Section>
  );
};

export default Projects;

const InnerWrapper = styled.div`
  .hightlight {
    ${mixins.halfHL}
  }
`;
