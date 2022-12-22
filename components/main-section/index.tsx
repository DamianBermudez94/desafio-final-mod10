import { SearchForm } from "components/seacrh-form";
import { useRouter } from "next/router";
import React from "react";
import { Title } from "ui/text";
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
      <TitleWrapper>
        <Title>
          Deco <br></br>&<br></br>Home
        </Title>
        <SearchForm type="primary" submit={handleSubmit}></SearchForm>
      </TitleWrapper>
    </MainSectionWrapper>
  );
};