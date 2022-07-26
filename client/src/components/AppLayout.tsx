import Nav from './Nav/Nav';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <AppLayoutWrapper>
        {children}
        {/* body */}
        {/* footer */}
      </AppLayoutWrapper>
    </>
  );
};

export default AppLayout;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppLayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin: auto;
  width: 31.25rem;
`;
