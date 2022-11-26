import { SearchForm } from "components/seacrh-form";
import { SideBar } from "components/side-bar";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ArrowDownIcon, BurguerIcon, WhiteLogoIcon } from "ui/icons";
import { LargeText } from "ui/text";
import {
  ArrowWrapper,
  BaseHeader,
  BurgerWrapper,
  FormWrapper,
  IconContainer,
  MenuButtonWrapper,
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
          <WhiteLogoIcon />
        </IconContainer>
      </Link>
      <BurgerWrapper onClick={toggleMenu}>
        <BurguerIcon></BurguerIcon>
      </BurgerWrapper>
      <MenuButtonWrapper onClick={toggleMenu}>
        <LargeText>Menu</LargeText>
        {flag ? (
          <ArrowWrapper
            style={{
              transform: `rotate(-180deg)`,
              transition: "0.6s ease-in-out",
            }}
          >
            <ArrowDownIcon></ArrowDownIcon>
          </ArrowWrapper>
        ) : (
          <ArrowWrapper
            style={{
              transition: "0.6s ease-in-out",
            }}
          >
            <ArrowDownIcon></ArrowDownIcon>
          </ArrowWrapper>
        )}
      </MenuButtonWrapper>
      {props.form ? (
        <FormWrapper>
          <SearchForm submit={handleSubmit} type="secondary"></SearchForm>
        </FormWrapper>
      ) : null}
      <SideBar toggle={toggleMenu} show={flag}></SideBar>
    </BaseHeader>
  );
};