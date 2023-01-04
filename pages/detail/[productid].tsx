import { Layout } from "components/layout";
import { ProductDetailPage } from "components/product-detail-page";
import { fetchApi } from "lib/api/api";
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
    "https://backend-ecommerce-desafiom9.vercel.app/api/products/all/id",
  );
  const productId = await res.json();
  console.log("soy la respuesta del json",productId);
  
  const paths = productId.map((item: any) => ({
    params: {productId : item.toString()},
  }));
 
  console.log("soy el resultado de los paths",paths);
  
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
