import { FeaturedSection } from "components/featured-section";
import { MainSection } from "components/main-section";
import Image from "next/image";
import React from "react";
import { BackgroundDiv, ContentDiv, HomeWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
  data: any;
};
export const HomePage: React.FC<Props> = ({ children, data }) => {
  return (
    <HomeWrapper>
      <BackgroundDiv>
        <Image
          priority={true}
          objectFit="cover"
          layout="fill"
          src={"/background.webp"}
          width={100}
          height={100}
          alt="background-image"
        ></Image>
      </BackgroundDiv>
      <ContentDiv>
        <MainSection></MainSection>
        <FeaturedSection data={data}></FeaturedSection>
      </ContentDiv>
    </HomeWrapper>
  );
};