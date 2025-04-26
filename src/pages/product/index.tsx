import ProductosPage from "src/components/product";
import Head from "next/head";
import type { NextPage } from "next";

const Productos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Productos - Mi Tienda</title>
      </Head>
      <ProductosPage />;
    </>
  );
};

export default Productos;
