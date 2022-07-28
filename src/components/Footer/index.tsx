import styled from 'styled-components';

const Footer = () => (
  <FooterStyle>
    <p>Made by UHJ</p>
  </FooterStyle>
);

export default Footer;

const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 70px;
  padding: 15px;

  p {
    font-size: 12px;
    color: var(--main);
  }
`;
