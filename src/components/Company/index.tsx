import Image from 'next/image';
import styled from 'styled-components';
import type { TypeCompany } from '@src/types/types';
import Card from '../Card';

const Company = ({ title, date, icon, project, url }: TypeCompany) => {
  return (
    <Container>
      <div className="titleWrapper">
        <h3 className="companyTitle">
          <div className="imageWrapper">
            <Image
              width={50}
              height={50}
              src={`/images/${icon}.png`}
              alt={title}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </div>
          <a className="companyLink" href={url} target="_blank" rel="noreferrer noopener">
            @{title}
          </a>
        </h3>
        <p className="range">{date}</p>
      </div>
      <ul className="projectList">
        {[...project].reverse().map(({ id, title, date, language, description, detail, url }) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              date={date}
              description={description}
              detail={detail}
              language={language}
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

  .imageWrapper {
    background-color: var(--snow);
    margin: 10px;
  }
`;
