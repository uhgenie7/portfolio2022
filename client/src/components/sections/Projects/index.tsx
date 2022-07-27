import styled from 'styled-components';
import Section from '..';
import mixins from '@src/styles/mixin';

const Projects = () => {
  return (
    <Section title="My Projects" id="projects">
      <InnerWrapper>
        <p>
          웹이 기술적으로 빠르게 발전함에 따라 새롭고 다양한 기능을 찾아서 적용해보는 것을 즐깁니다.
          <br />
          작업물이 늘어날수록 발전하는 모습을 볼 수 있습니다. <span className="hightlight">Githube</span>에서 더 자세히
          확인할 수 있습니다.
        </p>
        <ul></ul>
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
