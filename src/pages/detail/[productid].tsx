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
  try {
    const res = await fetch(
      "https://backend-ecommerce-desafiom9.vercel.app/api/products/all/id"
    );

    const ids: string[] = await res.json();
    console.log("Soy los ids", ids);

    const paths = ids
      .filter((id): id is string => typeof id === "string" && id.trim() !== "")
      .map((id) => ({
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

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.productid;

  console.log("🧩 ID recibido:", id);

  if (!id || typeof id !== "string") {
    return { notFound: true };
  }

  try {
    const producto: ProductoType | null = await fetchApi("/products/" + id);

    if (!producto || typeof producto !== "object") {
      return { notFound: true };
    }

    return {
      props: { producto },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("❌ Error al obtener el producto:", error);
    return {
      notFound: true, // mejor que pasar error: true
    };
  }
};

export default ProductDetail;
