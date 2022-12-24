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

  ;
  @media screen and (min-width: 960px) {
    height: 180px;
    flex-direction: row;
  
  }
`;
export const SocialMediaWrapper = styled.div`
    color: rgb(255, 255, 255);
    width: 100%;
   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  @media screen and (min-width: 960px) {
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: row;
  }
`;



export const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  display: flex;
  justify-items: space-between;
  margin: 0 5px;
  

 

`;