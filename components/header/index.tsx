import { SearchForm } from "components/search-form";
import { SideBar } from "components/side-bar";
import {WhiteLogoIcon} from "ui/icons"
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";


import {
  BaseHeader,
  BurgerWrapper,
  FormWrapper,
  IconContainer,
} from "./styled";

type Props = {
  form: boolean;
  sticky?: boolean;
};

export const Header: React.FC<Props> = (props) => {
  const [flag, setFlag] = useState(false);
  const router = useRouter();
  function handleSubmit(data: any) {
    if (data.query) router.push("/search/" + data.query);
  }

  function toggleMenu() {
    setFlag(!flag);
  }
  return (
    <BaseHeader style={{ position: props.sticky ? "sticky" : "static" }}>
      <Link href="/">
        <IconContainer>
        <WhiteLogoIcon></WhiteLogoIcon>
        </IconContainer>
      </Link>
      <BurgerWrapper onClick={toggleMenu}>
     
      </BurgerWrapper>
    
      {props.form ? (
        <FormWrapper>
          <SearchForm submit={handleSubmit} type="secondary"></SearchForm>
        </FormWrapper>
      ) : null}
      <SideBar toggle={toggleMenu} show={flag}></SideBar>
    </BaseHeader>
  );
};