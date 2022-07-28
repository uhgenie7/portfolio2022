import Nav from './Nav';
import styled from 'styled-components';
import Footer from '@src/components/Footer';
import ThemeToggle from '@src/components/ThemeToogle';
import Social from '@src/components/Social';
import { useIsMobile } from '@src/hook/useIsMobile';
import Menu from '../assets/icons/menu.svg';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  const isMobile = useIsMobile();

  return (
    <Wrap>
      <NavWrapper>
        {isMobile ? (
          <Menu />
        ) : (
          <>
            <Nav />
            <ThemeToggle />
            <Social />
          </>
        )}
      </NavWrapper>
      <AppLayoutWrapper>{children}</AppLayoutWrapper>
      <Footer />
    </Wrap>
  );
};

export default AppLayout;

const Wrap = styled.div`
  height: 100vh;

  svg {
    fill: var(--main);

    &:hover {
      fill: var(--main);
    }
  }
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
