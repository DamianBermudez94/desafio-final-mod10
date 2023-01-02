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
    "https://dwf-m9-desafio-final.vercel.app/api/products/all/id"
  );
  console.log("Soy la respuesta de la api",res);
  
  const json = await res.json();
  console.log("Soy la respuesta del json",json);
  
  const paths = json.map((item: any) => {
    console.log("hola perro",{ params: { productId: item } });
    
    
    return { params: { productId: item } };
  });
  console.log("soy los paths",paths);
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
