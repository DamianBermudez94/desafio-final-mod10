import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  padding: 9px;
  font-weight: 700;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: #6a994e;
  &:hover {
    background-color: #76cc88;
  }
`;
export const PrimaryButtonBig = styled(Button)`
  font-size: 24px;
  background-color: #6a994e;
  &:hover {
    background-color: #76cc88;
  }
`;
export const SecondaryButton = styled(Button)`
  background-color: #3c82d6;
  &:hover {
    background-color: #78b1f7;
  }
`;
export const TertiaryButton = styled(Button)`
  background-color: #ec8d35;
  &:hover {
    background-color: #ffac5f;
  }
`;
export const CancelButton = styled(Button)`
  background-color: #bc4749;
  &:hover {
    background-color: #cf4745;
  }
`;