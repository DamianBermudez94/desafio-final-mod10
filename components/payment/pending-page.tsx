import Link from "next/link";
import React from "react";
import { PrimaryButton } from "ui/buttons";
import { LargeText, Title } from "ui/text";
import { ButtonContainer, Root, TextContainer } from "./styled";

const PendingPage: React.FC = () => {
  return (
    <Root>
      <Title>El pago esta pendiente</Title>
      <TextContainer>
        <LargeText>
          En cuanto recibamos la confirmacion de pago, nos comunicaremos por
          mail para coordinar el envío.
        </LargeText>
        <LargeText>Muchas gracias por tu compra.</LargeText>
        <ButtonContainer>
          <Link href="/">
            <PrimaryButton>Seguir comprando</PrimaryButton>
          </Link>
        </ButtonContainer>
      </TextContainer>
    </Root>
  );
};

export default PendingPage;