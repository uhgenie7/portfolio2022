import styled from 'styled-components';
import type { TypeProject } from '@src/types/types';

const ProjectItem = ({ id, title, language, data, url, description }: TypeProject) => {
  return (
    <Container>
      <h3 className="projectTitle">{title}</h3>
      <p className="description">{description}</p>
      <ul className="hashtagWrapper">
        {language.map((lang) => {
          return <li className="hashtag">{lang}</li>;
        })}
      </ul>
      <ul>
        {data.map((item) => {
          return <li className="dataList">{item}</li>;
        })}
      </ul>
      {url && (
        <a className="projectLinkWrapper" href={url} target="_blank" rel="noreferrer noopener">
          <p className="projectLink">서비스 둘러보기</p>
        </a>
      )}
    </Container>
  );
};

export default ProjectItem;

const Container = styled.li``;
