import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 300px;
  background-color: #313638;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px;
  @media screen and (min-width: 744px) {
    height: 180px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const SocialMediaWrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 744px) {
    max-width: 180px;
    align-items: center;
  }
`;

export const SocialMediaLinkWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 744px) {
    justify-content: center;
  }
`;