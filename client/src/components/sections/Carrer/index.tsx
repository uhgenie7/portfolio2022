import styled from 'styled-components';
import Section from '..';
import carrer from '@src/libs/carrer.json';
import Company from '@src/components/Company';
import type { TypeCarrer } from '@src/types/types';

const Carrer = () => {
  let parseJson = JSON.parse(JSON.stringify(carrer));
  const { company }: TypeCarrer = parseJson;
  console.log(company);

  return (
    <Section title="My Carrer" id="carrer">
      <InnerWrapper>
        <ul>
          {company.reverse().map(({ id, title, date, icon, url, project }) => (
            <Company url={url} id={id} key={id} title={title} date={date} icon={icon} project={project} />
          ))}
        </ul>
      </InnerWrapper>
    </Section>
  );
};

export default Carrer;

const InnerWrapper = styled.div``;
