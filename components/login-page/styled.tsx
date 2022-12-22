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

export const LoginPageBody = styled.div`
  width: 100%;
  height: 249px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;