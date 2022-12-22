import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 300px;
  background-color: #313638;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px;
  margin: 0 auto;
  ;
  @media screen and (min-width: 960px) {
    height: 180px;
    flex-direction: row;
  
  }
`;
export const SocialMediaWrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  @media screen and (min-width: 960px) {
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

export const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
 

`;