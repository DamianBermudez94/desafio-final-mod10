import styled from "styled-components";


export const SideBarContainer = styled.div`
  
  @media screen and (min-width: 960px) {
    position: static;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: red;
    
 
 }
`;

export const UserSessionWrapper = styled.div`
  margin: 0 auto;
  max-width: 125px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom:20px;
  color: #fff;
  @media screen and (min-width: 960px) {
  color: #000;
  }
`;