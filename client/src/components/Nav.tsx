import styled from 'styled-components';
import config from '@src/libs/config.json';
import Link from 'next/link';

const Nav = () => {
  const { navLinks } = config;
  return (
    <NavStyle>
      <ol>
        {navLinks &&
          navLinks.map(({ url, name, key }) => (
            <li key={key}>
              <Link href={url}>{name}</Link>
            </li>
          ))}
      </ol>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  display: flex;
  align-items: center;

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      a {
        padding: 10px;
        &:before {
          margin-right: 5px;
          text-align: right;
        }
      }
    }
  }
`;
