import { ProfileForm } from "src/components/profile-form";
import { fetchApi } from "src/lib/api/api";
import React from "react";
import useSWR from "swr";
import { Title } from "src/ui/text";
import { ProfilePageWrapper, ProfileTitleWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const ProfilePage: React.FC<Props> = ({ children }) => {
  const { data, error } = useSWR("/me", fetchApi);

  return (
    <div className="flex flex-col justify-between w-0.5 gap-10">
      <div>
        <h2>Perfil</h2>
      </div>
      <ProfileForm data={data}></ProfileForm>
    </div>
  );
};
