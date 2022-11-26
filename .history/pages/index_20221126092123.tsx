import { HomePage } from "components/home-page";
import { Layout } from "components/layout";
import { fetchApi } from "lib/api";
import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Compralo Mueblería</title>
      </Head>
      <Layout form={false} sticky={true}>
        <HomePage data={data}></HomePage>
      </Layout>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const data = await fetchApi("/products/featured");

    return {
      props: { data },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
}

export default Home;
