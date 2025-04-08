import React from "react";
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
  type: "mail" | "code";
  email: string;
  setEmail: (val: string) => void;
  code: string;
  setCode: (val: string) => void;
  submit: (e: React.FormEvent) => void;
};

export const LoginForm: React.FC<Props> = ({
  type,
  email,
  setEmail,
  code,
  setCode,
  submit,
}) => {
  return (
    <LoginFormWrapper onSubmit={submit}>
      {type === "mail" ? (
        <LoginInputWrapper>
          <Input
            name="email"
            label="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </LoginInputWrapper>
      ) : (
        <CodeInputWrapper>
          <Input
            name="code"
            label="Código"
            value={code}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
          />
          <TinyText>Te enviamos un código al mail</TinyText>
        </CodeInputWrapper>
      )}
      <LoginButtonWrapper>
        <PrimaryButton>
          {type === "mail" ? "Continuar" : "Ingresar"}
        </PrimaryButton>
      </LoginButtonWrapper>
    </LoginFormWrapper>
  );
};
