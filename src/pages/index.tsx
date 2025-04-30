import { HomePage } from "src/components/home-page";
import { Layout } from "src/components/layout";
import { fetchApi } from "src/lib/api/api";
import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Deco & Home</title>
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
