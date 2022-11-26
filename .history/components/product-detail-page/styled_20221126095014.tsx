import styled from "styled-components";
import { SubTitle } from "ui/text";

export const DetailWrapper = styled.div`
  margin: 36px 24px 100px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 744px) {
    margin: 90px auto 172px auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 39px;
  }
`;
export const NotFoundWrapper = styled.div`
  width: 100%;
  text-align: center;
  height: calc(100vh - 488px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 744px) {
    height: calc(100vh - 264px);
  }
`;
export const DetailImgWrapper = styled.div`
  height: 100%;
`;
export const DetailImg = styled.img`
  height: 100%;
  width: 100%;
  max-height: 290px;
  @media screen and (min-width: 744px) {
    max-height: 400px;
  }
`;

export const DetailDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DetailButtonWrapper = styled.div`
  height: 63px;
`;

export const ProductDetailTitle = styled(SubTitle).attrs(() => ({
  as: "h1",
}))``;