import Link from "next/link";
import React from "react";
import { PrimaryButton } from "ui/buttons";
import { LargeText, Title } from "ui/text";
import { ButtonContainer, Root, TextContainer } from "./styled";

const FailurePage: React.FC = () => {
  return (
    <Root>
      <Title>El pago falló</Title>
      <TextContainer>
        <LargeText>No pudimos recibir el pago.</LargeText>
        <LargeText>Por favor vuelve a intentarlo.</LargeText>
        <ButtonContainer>
          <Link href="/">
            <PrimaryButton>Ir al inicio</PrimaryButton>
          </Link>
        </ButtonContainer>
      </TextContainer>
    </Root>
  );
};

export default FailurePage;