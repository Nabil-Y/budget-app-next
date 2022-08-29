import styled from "styled-components";

const Main = styled.main.attrs({
  id: "skipNav",
})`
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

export default Main;
