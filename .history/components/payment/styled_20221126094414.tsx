
export const Root = styled.div`
  text-align: center;
  padding: 0 16px 40px 16px;
  max-width: 800px;
  margin: 0 auto;
  min-height: calc(100vh - 386px);
  @media screen and (min-width: 744px) {
    min-height: calc(100vh - 296px);
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  min-height: 20vh;
`;
export const ButtonContainer = styled.div`
  height: 46px;
  width: 100%;
  max-width: 360px;
  margin: 0px auto;
  margin-top: 30px;
`;