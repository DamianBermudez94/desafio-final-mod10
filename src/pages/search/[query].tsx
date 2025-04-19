import { Layout } from "src/components/layout";
import { SearchPage } from "src/components/search-page";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Search: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;
  return (
    <Layout form={true}>
      <Head>
        <title className="bg-amber-600">Resultados - compralo</title>
      </Head>
      <SearchPage query={query as string}></SearchPage>
    </Layout>
  );
};

export default Search;
