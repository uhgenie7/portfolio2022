import Nav from './Nav/Nav';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <AppLayoutWrapper>
      <Nav />
      {children}
      {/* body */}
      {/* footer */}
    </AppLayoutWrapper>
  );
};

export default AppLayout;

const AppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
