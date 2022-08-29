import styled from "styled-components";

const Footer = styled.footer`
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

const FooterJSX = () => {
  return <Footer>Footer</Footer>;
};

export default FooterJSX;
