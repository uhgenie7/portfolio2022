import Nav from './Nav';
import styled from 'styled-components';
import Footer from '@src/components/Footer';
import ThemeToggle from '@src/components/ThemeToogle';
import Social from '@src/components/Social';
import Menu from '@src/components/Menu';
import { useIsMobile } from '@src/hook/useIsMobile';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  const isMobile = useIsMobile();

  return (
    <Wrap>
      <Header isMobile={isMobile}>
        {isMobile ? (
          <Menu />
        ) : (
          <>
            <Nav />
            <ThemeToggle />
            <Social />
          </>
        )}
      </Header>
      <AppLayoutWrapper>{children}</AppLayoutWrapper>
      <Footer />
    </Wrap>
  );
};

export default AppLayout;

const Wrap = styled.div`
  height: 100vh;

  svg {
    &:hover {
      fill: var(--main);
    }
  }
`;

const Header = styled.header<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '100%' : '40px')};
  left: ${({ isMobile }) => (isMobile ? 0 : '40px')};
  background: ${({ isMobile }) => (isMobile ? 'var(--mainOpacity)' : 'transparent')};

  position: fixed;
  top: 0;
  z-index: 10;
  color: var(--main2);
`;

const AppLayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 46.25rem;
`;
