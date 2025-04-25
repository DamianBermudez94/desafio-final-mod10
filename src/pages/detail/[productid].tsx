import { Layout } from "src/components/layout";
import { ProductDetailPage } from "src/components/product-detail-page";
import { fetchApi } from "src/lib/api/api";
import type {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import { ProductoType } from "src/types"; // Asegurate de tener este tipo

type Props = {
  producto: ProductoType;
  error?: boolean;
};

const ProductDetail: NextPage<Props> = ({ producto, error }) => {
  console.log(producto);

  if (!producto && !error) {
    return <div>Cargando...</div>;
  }

  return (
    <Layout form={true} sticky={false}>
      <Head>
        <title>Detalle del Producto - Compralo</title>
      </Head>
      <ProductDetailPage producto={producto} notFound={!!error} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("Hola");

  try {
    const res = await fetch(
      "https://backend-ecommerce-desafiom9.vercel.app/api/products/all/id"
    );
    console.log("soy la respuesta de los productos", res);

    const ids: string[] = await res.json();

    const paths = ids.map((id) => ({
      params: { productid: id },
    }));

    return {
      paths,
      fallback: true, // permite renderizar productos que no estaban al momento del build
    };
  } catch (error) {
    console.error("❌ Error al generar paths:", error);
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.productid;

  console.log("🧩 ID recibido en getStaticProps:", id);

  if (!id || typeof id !== "string") {
    console.warn("⚠️ No se encontró el ID del producto.");
    return { notFound: true };
  }

  try {
    const data: ProductoType = await fetchApi("/products/" + id);
    console.log("📦 Producto recibido:", data);

    if (!data) {
      return { notFound: true };
    }

    return {
      props: { producto: data },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("❌ Error al obtener el producto:", error);
    return {
      props: { error: true },
    };
  }
};

export default ProductDetail;
