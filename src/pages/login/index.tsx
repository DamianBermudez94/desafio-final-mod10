import { Layout } from "src/components/layout";
import { LoginPage } from "src/components/login-page";
import type { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <Layout form={false}>
      <Head>
        <title>Login - Compralo</title>
      </Head>
      <LoginPage></LoginPage>
    </Layout>
  );
};

export default Login;