import styled from "styled-components"
export const ProfilePageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 480px;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
  padding: 20px;
  @media screen and (min-width: 744px) {
    margin-top: 10px;
    margin-bottom: 40px;
    max-width: 900px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: calc(100vh - 314px);
    gap: 77px;
  }
`;
export const ProfileTitleWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 744px) {
    text-align: center;
  }
`;