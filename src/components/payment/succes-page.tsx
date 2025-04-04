import Link from "next/link";
import { PrimaryButton } from "ui/buttons";
import { LargeText, Title } from "ui/text";
import { ButtonContainer, Root, TextContainer } from "./styled";

const SuccessPage: React.FC = () => {
  return (
    <Root>
      <Title>El pago ha sido exitoso!</Title>
      <TextContainer>
        <LargeText>
          En breve nos comunicaremos por mail para coordinar el envio.
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

export default SuccessPage;