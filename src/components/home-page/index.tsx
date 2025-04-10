import { FeaturedSection } from "src/components/featured-section";
import { MainSection } from "src/components/main-section";
import React from "react";

type Props = {
  children?: React.ReactNode;
  data: any;
};

export const HomePage: React.FC<Props> = ({ children, data }) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center text-center">
      <div className="z-[1] w-full h-full">
        <img
          src="/background.jpg"
          alt="background-image"
          className="object-cover w-full h-full absolute top-0 flex flex-col justify-center items-center bg-cover"
        />
      </div>
      <div className="z-[2] relative w-full h-full">
        <MainSection />
        <FeaturedSection data={data} />
      </div>
    </div>
  );
};