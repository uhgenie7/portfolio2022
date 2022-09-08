import styled from 'styled-components';

interface IProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ children, id, title }: IProps) => {
  return (
    <AboutSectionWrapper id={id}>
      <h2>{title}</h2>
      {children}
    </AboutSectionWrapper>
  );
};

const AboutSectionWrapper = styled.section`
  margin-bottom: 5rem;
  width: 100%;
  counter-increment: section;

  h2 {
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 16px;
    color: var(--main);

    &:before {
      content: '0' counter(section) '.';
      margin-right: 10px;
    }
  }
`;

export default Section;
