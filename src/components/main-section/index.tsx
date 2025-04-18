import { SearchForm } from "src/components/search-form";
import { useRouter } from "next/router";
import React from "react";

import { MainSectionWrapper, TitleWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const MainSection: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  function handleSubmit(data: any) {
    if (data.query) {
      router.push("/search/" + data.query);
    }
  }
  return (
    <MainSectionWrapper>
      <div>
        <h1 className="text-6xl">
          Deco <br></br>&<br></br>Home
        </h1>
        <SearchForm type="primary" submit={handleSubmit}></SearchForm>
      </div>
    </MainSectionWrapper>
  );
};