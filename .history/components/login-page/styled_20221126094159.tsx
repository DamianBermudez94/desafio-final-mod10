import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  margin: 0 auto;
  height: calc(100vh - 384px);
  max-width: 480px;
  padding: 20px;
  @media screen and (min-width: 744px) {
    height: calc(100vh - 264px);
  }
`;
export const LoginLoadersWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;