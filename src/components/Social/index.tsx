import styled from 'styled-components';
import Github from '../../assets/icons/github.svg';
import Tistory from '../../assets/icons/tistory.svg';

const Social = () => {
  return (
    <Container>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://jineecode.tistory.com/" className="blog">
          <Tistory width={24} height={24} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/uhj1993">
          <Github />
        </a>
      </li>
    </Container>
  );
};

export default Social;

const Container = styled.div`
  width: 8rem;
  display: flex;
  padding: 0.3rem 1rem;
  justify-content: space-between;

  svg {
    fill: ${({ theme }) => theme.textColor};

    &:hover {
      fill: var(--main);
    }
  }
`;
