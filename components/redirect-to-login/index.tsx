import Link from "next/link";
import React from "react";
import { PrimaryButton } from "ui/buttons";
import { SubTitle } from "ui/text";
import { RedirectContainer } from "./styled";

export const RedirectToLogin: React.FC = () => {
  return (
    <RedirectContainer>
      <SubTitle>Debes iniciar sesión</SubTitle>
      <Link href={"/login"}>
        <div>
          <PrimaryButton>Iniciar sesión</PrimaryButton>
        </div>
      </Link>
    </RedirectContainer>
  );
};