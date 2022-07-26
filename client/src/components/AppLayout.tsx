import Nav from './Nav';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <Wrap>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <AppLayoutWrapper>
        {children}
        {/* body */}
        {/* footer */}
      </AppLayoutWrapper>
    </Wrap>
  );
};

export default AppLayout;

const Wrap = styled.div`
  height: 100vh;
`;

const NavWrapper = styled.header`
  width: 40px;
  position: fixed;
  left: 40px;
  top: 0;
  z-index: 10;
  color: var(--main2);
`;

const AppLayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin: auto;
  width: 46.25rem;
`;
