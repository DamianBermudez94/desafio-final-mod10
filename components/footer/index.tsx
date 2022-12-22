import Link from "next/link";
import React from "react";
import { InstagramLogoIcon, FacebookLogoIcon, WhiteLogoIcon } from "ui/icons";
import { BodyText, LargeTextBold } from "ui/text";
import {
  FooterWrapper,
  SocialMediaLinkWrapper,
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
          <SocialMediaLinkWrapper>
            <FacebookLogoIcon></FacebookLogoIcon>
            <BodyText>Facebook</BodyText>
          </SocialMediaLinkWrapper>
        </StyledLink>
        <StyledLink href={"https://damianbermudezdev.es/"} target={"_blank"}>
          <SocialMediaLinkWrapper>
            <InstagramLogoIcon></InstagramLogoIcon>
            <BodyText>Instagram</BodyText>
          </SocialMediaLinkWrapper>
        </StyledLink>
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};