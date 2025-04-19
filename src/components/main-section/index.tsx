import { SearchForm } from "src/components/search-form";
import { useRouter } from "next/router";
import React from "react";

import { MainSectionWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const MainSection: React.FC<Props> = ({ children }) => {
  return (
    <MainSectionWrapper>
      <div>
        <h1 className="text-6xl">
          Deco <br></br>&<br></br>Home
        </h1>
        <p className="pt-4 text-4xl">
          Todo lo que buscas para el interior de tu casa
        </p>
      </div>
    </MainSectionWrapper>
  );
};
