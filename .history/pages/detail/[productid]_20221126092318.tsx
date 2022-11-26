import { Layout } from "components/layout";
import { ProductDetailPage } from "components/product-detail-page";
import { fetchApi } from "lib/api";
import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";

const Search: NextPage = ({ data, error }: any) => {
  return (
    <Layout form={true} sticky={false}>
      <Head>
        <title>Detalle Del Producto - Compralo</title>
      </Head>
      <ProductDetailPage
        data={data}
        notFound={error ? true : false}
      ></ProductDetailPage>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://backend-ecommerce-desafiom9.vercel.app/api/products/all/id"
  );
  const json = await res.json();
  const paths = json.map((item: any) => {
    return { params: { productId: item } };
  });

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context?.params?.productId;

  try {
    const data = await fetchApi("/products/" + id);

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

export default Search;
