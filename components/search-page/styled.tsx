import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 40px;
  min-height: 100vh;
  background-color: #e0dfd5;
  padding: 40px 20px;
`;
export const ProductsCardWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 744px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const ProductNotFoundWrapper = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const ProductsCardPagesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-self: end;
`;
export const PageNumber = styled.div`
  cursor: pointer;
  width: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #c4c3b7;
  }
`;