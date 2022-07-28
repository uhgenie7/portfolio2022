import { useState, useEffect, useRef } from 'react';
import ThemeToogle from '../ThemeToogle';
import { useIsMobile } from '@src/hook/useIsMobile';
import useOnClickOutside from '@src/hook/useOnClickOutside';
import styled from 'styled-components';
import Social from '../Social';
import config from '@src/libs/config.json';
import Link from 'next/link';
import MenuIcon from '../../assets/icons/menu.svg';
import CloseIcon from '../../assets/icons/close.svg';

const Menu = () => {
  const { navLinks } = config;
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const wrapperRef = useRef<any>();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <MenuWrapper ref={wrapperRef}>
      <ToggleButton className="menuButton" onClick={toggleMenu} menuOpen={menuOpen}>
        {menuOpen ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
      </ToggleButton>
      <SideMenu menuOpen={menuOpen} isMobile={isMobile} tabIndex={menuOpen ? 1 : -1}>
        <nav>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name, key }) => (
                <li key={key}>
                  <Link href={url}>
                    <a onClick={() => setMenuOpen(false)}>{name}</a>
                  </Link>
                </li>
              ))}
          </ol>
        </nav>
        <div className="menuTheme">
          <ThemeToogle />
        </div>
        <Social />
      </SideMenu>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ToggleButton = styled.button<{ menuOpen: boolean }>`
  z-index: ${({ menuOpen }) => (menuOpen ? 10 : 0)};
  position: ${({ menuOpen }) => (menuOpen ? 'fixed' : 'block')};
  padding: 15px;

  svg {
    fill: ${({ theme }) => theme.textColor};
  }
`;

const SideMenu = styled.aside<{ isMobile: boolean; menuOpen: boolean }>`
  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--main2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: min(75vw, 400px);
  height: 100vh;
  z-index: 9;
  transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0vw)' : 'translateX(100vw)')};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  .menuTheme {
    margin-top: 2rem;
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ol {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: ${({ isMobile }) => (isMobile ? '10px 0' : '3rem')};
      position: relative;
      counter-increment: index 1;
      text-align: center;
      a {
        font-size: ${({ isMobile }) => (isMobile ? 'min(10vw, 2em);' : '1em')};
        color: var(--snow);
        padding: 10px;
        &:before {
          content: '0' counter(index) '.';
          margin-right: 5px;
          text-align: right;
          color: var(--snow);
        }
      }
    }
  }
`;
