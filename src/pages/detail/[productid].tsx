import { Layout } from "src/components/layout";
import { ProductDetailPage } from "src/components/product-detail-page";
import { fetchApi } from "src/lib/api/api";
import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";

const Search: NextPage = ({ data, error }: any) => {
  if (!data && !error) {
    return <div>Cargando...</div>; // 🔹 Mostrar algo mientras llegan los datos
  }

  return (
    <Layout form={true} sticky={false}>
      <Head>
        <title>Detalle Del Producto - Compralo</title>
      </Head>
      <ProductDetailPage data={data} notFound={!!error} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://backend-ecommerce-desafiom9.vercel.app/api/products/all/id",
  );
  const json = await res.json();
  const paths = json.map((item: any) => {
    return { params: { productId: item } };
  });
  console.log("soy los paths", paths);

  return {
    paths: [],
    fallback: true, // false or 'blocking'
  };
}


export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context?.params?.productId;

  if (!id) {
    console.log("⚠️ No se encontró el ID del producto.");
    return { notFound: true }; // ❌ Página 404 si no hay ID
  }

  try {
    const data = await fetchApi("/products/" + id);
    console.log("✅ Datos obtenidos:", data);

    if (!data) {
      return { notFound: true };
    }

    return {
      props: { data },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("❌ Error al obtener el producto:", error);
    return {
      props: { error: true },
    };
  }
}

export default Search;
