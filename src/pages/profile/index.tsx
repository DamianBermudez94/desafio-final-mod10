import { Layout } from "src/components/layout";

import { ProfilePage } from "src/components/profile-page";
import { RedirectToLogin } from "src/components/redirect-to-login";
import { useCheckToken } from "src/hooks/hooks";
import type { NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = () => {
  const token = useCheckToken();
  return (
    <Layout form={false}>
      <Head>
        <title>Perfil - compralo</title>
      </Head>
      {token ? <ProfilePage></ProfilePage> : <RedirectToLogin />}
    </Layout>
  );
};
export default Profile;