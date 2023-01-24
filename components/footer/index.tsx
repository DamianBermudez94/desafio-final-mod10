
import React from "react";
import { InstagramLogoIcon, FacebookLogoIcon, WhiteLogoIcon } from "ui/icons";
import { BodyText, LargeTextBold } from "ui/text";
import {
  FooterWrapper,

  SocialMediaWrapper,
  StyledLink
} from "./styled";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <WhiteLogoIcon></WhiteLogoIcon>
      <SocialMediaWrapper>
        <LargeTextBold>Redes</LargeTextBold>
        <StyledLink  href={"https://damianbermudezdev.es/"} target={"_blank"}>
            <FacebookLogoIcon></FacebookLogoIcon>
        </StyledLink>
        <StyledLink href={"https://damianbermudezdev.es/"} target={"_blank"}>
            <InstagramLogoIcon></InstagramLogoIcon>
           
        </StyledLink>
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};