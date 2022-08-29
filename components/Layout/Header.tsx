import styled from "styled-components";

const Header = styled.header`
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

const HeaderJSX = () => {
  return <Header>Header</Header>;
};

export default HeaderJSX;
