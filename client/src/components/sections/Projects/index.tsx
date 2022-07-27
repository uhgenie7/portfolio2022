import styled from 'styled-components';
import Section from '..';

const Projects = () => {
  return (
    <Section title="My Projects" id="projects">
      <InnerWrapper>
        <ul></ul>
      </InnerWrapper>
    </Section>
  );
};

export default Projects;

const InnerWrapper = styled.div``;
