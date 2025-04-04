import styled from "styled-components";

export const BaseForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 10px;
  @media screen and (min-width: 744px) {
    flex-direction: row;
  }
`;
export const FormInputWrapper = styled.div`
  @media screen and (min-width: 744px) {
    width: 100%;
    flex-grow: 10;
  }
`;
export const FormButtonWrapper = styled.div`
  @media screen and (min-width: 744px) {
    width: 30%;
    flex-grow: 1;
  }
`;