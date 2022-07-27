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
    padding: 0;
    margin: 0;
    list-style: none;

    &:before {
      content: '';
      display: block;
      width: 1px;
      height: 150px;
      margin: 0 auto;
      background-color: var(--main);
    }

    li {
      font-size: 18px;
      margin: 10px 0 15px;
      position: relative;
      counter-increment: index 1;
      a {
        color: ${({ theme }) => theme.textColor};
        padding: 10px;
        &:before {
          content: '0' counter(index) '.';
          margin-right: 5px;
          text-align: right;
          color: var(--main);
        }
      }
    }
  }
`;
