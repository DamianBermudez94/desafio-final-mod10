import styled from "styled-components";

export const BaseHeader = styled.header`
  z-index: 5;
  width: 100%;
  padding: 23px;

  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  @media screen and (min-width: 960px) {
    height: 220px;
    
  }
`;
export const SidebarLink = styled.div`
  place-self: start;
`;
export const IconContainer = styled.div`
  place-self: start;
`;
export const LogoAndButtonWrapper = styled.div`
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
`;
export const BurgerWrapper = styled.div`
  place-self: end;
  @media screen and (min-width: 744px) {
    display: none;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
  }
`;

export const ArrowWrapper = styled.div``;
export const SideBarWrapper = styled.div`
  @media screen and (min-width: 744px) {
    margin-top: 84px;
  }
`;
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  grid-column-start: 1;
  grid-column-end: 3;
  @media screen and (min-width: 744px) {
    max-width: none;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
  }
`;