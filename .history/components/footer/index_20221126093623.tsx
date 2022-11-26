import Link from "next/link";
import React from "react";
import { InstagramIcon, TwitterIcon, WhiteLogoIcon } from "ui/icons";
import { BodyText, LargeTextBold } from "ui/text";
import {
  FooterWrapper,
  SocialMediaLinkWrapper,
  SocialMediaWrapper,
} from "./styled";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <WhiteLogoIcon></WhiteLogoIcon>
      <SocialMediaWrapper>
        <LargeTextBold>Redes</LargeTextBold>
        <Link href={"/"}>
          <SocialMediaLinkWrapper>
            <TwitterIcon></TwitterIcon>
            <BodyText>Twitter</BodyText>
          </SocialMediaLinkWrapper>
        </Link>
        <Link href={"/"}>
          <SocialMediaLinkWrapper>
            <InstagramIcon></InstagramIcon>
            <BodyText>Instagram</BodyText>
          </SocialMediaLinkWrapper>
        </Link>
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};