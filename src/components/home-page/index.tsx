import { FeaturedSection } from "src/components/featured-section";
import { MainSection } from "src/components/main-section";

import React from "react";
import { BackgroundDiv, ContentDiv, HomeWrapper,ImageBackground } from "./styled";

type Props = {
  children?: React.ReactNode;
  data: any;
};
export const HomePage: React.FC<Props> = ({ children, data }) => {
  return (
    <HomeWrapper>
      <BackgroundDiv>
        <ImageBackground
          src={"/background.jpg"}
          alt="background-image"
        ></ImageBackground>
      </BackgroundDiv>
      <ContentDiv>
        <MainSection></MainSection>
        <FeaturedSection data={data}></FeaturedSection>
      </ContentDiv>
    </HomeWrapper>
  );
};