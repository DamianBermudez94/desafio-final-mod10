import styled from "styled-components";

export const RedirectContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 744px) {
    height: calc(100vh - 264px);
  }
`;