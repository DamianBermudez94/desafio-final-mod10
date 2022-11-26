import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 882px) {
    background-size: contain;
  }
`;
export const BackgroundDiv = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
`;
export const ContentDiv = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
`;
export const SearchFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;