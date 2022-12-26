import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 250px;
  background-color: #313638;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px;

  ;
  @media screen and (min-width: 960px) {


    justify-content: space-between;
  
  }
`;
export const SocialMediaWrapper = styled.div`
    color: rgb(255, 255, 255);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
 
`;

export const FacebookLogoIcon = styled.p`
  color: rgb(255, 255, 255);
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  display: flex;
  justify-items: space-between;
  

`;