import React from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./../../ui/buttons";
import Input from "./../../ui/input";
import { TinyText } from "./../../ui/text";
import {
  CodeInputWrapper,
  LoginButtonWrapper,
  LoginFormWrapper,
  LoginInputWrapper,
} from "./styled";

type Props = {
  children?: React.ReactNode;
  type: "mail" | "code";
  submit: (data: any, event: any) => void;
};
export const LoginForm: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      {props.type == "mail" ? (
        <LoginFormWrapper onSubmit={handleSubmit(props.submit)}>
          <LoginInputWrapper>
            <Input name="email" label="Email" register={register}></Input>
          </LoginInputWrapper>
          <LoginButtonWrapper>
            <PrimaryButton>Continuar</PrimaryButton>
          </LoginButtonWrapper>
        </LoginFormWrapper>
      ) : (
        <LoginFormWrapper onSubmit={handleSubmit(props.submit)}>
          <CodeInputWrapper>
            <Input name="code" label="Codigo" register={register}></Input>
          </CodeInputWrapper>
          <TinyText>Te enviamos un código al mail</TinyText>
          <LoginButtonWrapper>
            <PrimaryButton>Ingresar</PrimaryButton>
          </LoginButtonWrapper>
        </LoginFormWrapper>
      )}
    </>
  );
};