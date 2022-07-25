import styled from 'styled-components';
import config from '@src/libs/config.json';
import Link from 'next/link';
import mixins from '@src/styles/mixin';

const Nav = () => {
  const { navLinks } = config;
  return (
    <NavStyle>
      <ol>
        {navLinks &&
          navLinks.map(({ url, name, key }) => (
            <li key={key}>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
      </ol>
    </NavStyle>
  );
};

export default Nav;

const NavStyle = styled.div`
  display: flex;
  align-items: center;

  ol {
    ${mixins.flexBetween}
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      a {
        color: ${({ theme }) => theme.textColor};
        padding: 10px;
        &:before {
          margin-right: 5px;
          text-align: right;
        }
      }
    }
  }
`;
