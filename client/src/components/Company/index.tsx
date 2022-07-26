import Image from 'next/image';
import styled from 'styled-components';
import type { TypeCompany } from '@src/types/types';
import ProjectItem from '../ProjectItem';

const Company = ({ title, date, icon, project, url }: TypeCompany) => {
  return (
    <Container>
      <div className="titleWrapper">
        <h3 className="companyTitle">
          <div className="imageWrapper">
            <Image width={50} height={50} src={`/images/${icon}.png`} alt={title} />
          </div>
          <a className="companyLink" href={url} target="_blank" rel="noreferrer noopener">
            @{title}
          </a>
        </h3>
        <p className="range">{date}</p>
      </div>
      <ul>
        {project.reverse().map(({ id, title, language, description, data, url }) => {
          return (
            <ProjectItem
              key={id}
              id={id}
              title={title}
              language={language}
              description={description}
              data={data}
              url={url}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default Company;

const Container = styled.li`
  .companyTitle {
    display: flex;
    align-items: center;
  }
  .companyLink {
    color: var(--sub);
  }

  .range {
    font-size: 13px;
    margin-left: 16px;
  }
`;
