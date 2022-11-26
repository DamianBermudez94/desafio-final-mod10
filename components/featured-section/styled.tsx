import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  width: 100%;
  background-color: #a5a58d;
  text-align: center;
  padding-bottom: 100px;
`;
export const SectionTitleWrapper = styled.div`
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 30px 40px;
`;
export const CardsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 744px) {
    flex-direction: row;
    justify-content: center;
    gap: 77px;
  }
`;