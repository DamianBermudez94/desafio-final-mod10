import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { CancelButton, PrimaryButton, SecondaryButton } from "ui/buttons";
import { LogoIcon } from "ui/icons";
import Input from "ui/input";
import {
  BodyText,
  BodyTextBold,
  LargeText,
  LargeTextBold,
  SubTitle,
  TinyText,
  Title,
} from "ui/text";

const Ui: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "500px",
      }}
    >
      <LogoIcon></LogoIcon>
      <Title>Title</Title>
      <SubTitle>Subtitle</SubTitle>
      <LargeText>Large</LargeText>
      <LargeTextBold>Large bold</LargeTextBold>
      <BodyText>Body text </BodyText>
      <BodyTextBold>Body text bold</BodyTextBold>
      <TinyText>Tiny</TinyText>
      <PrimaryButton>Comprar</PrimaryButton>
      <CancelButton>Cancel</CancelButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <Input register={register} name="input" placeHolder="Input"></Input>
    </div>
  );
};

export default Ui;