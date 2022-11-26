import { ProfileForm } from "components/profile-form";
import { fetchApi } from "lib/api";
import React from "react";
import useSWR from "swr";
import { Title } from "ui/text";
import { ProfilePageWrapper, ProfileTitleWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const ProfilePage: React.FC<Props> = ({ children }) => {
  const { data, error } = useSWR("/me", fetchApi);

  return (
    <ProfilePageWrapper>
      <ProfileTitleWrapper>
        <Title>Perfil</Title>
      </ProfileTitleWrapper>
      <ProfileForm data={data}></ProfileForm>
    </ProfilePageWrapper>
  );
};