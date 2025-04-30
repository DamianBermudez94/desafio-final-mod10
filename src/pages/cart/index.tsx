// src/pages/carrito.tsx
import Head from "next/head";
import CarritoView from "src/components/cart/CarritoView";
import { Layout } from "src/components/layout";

const CarritoPage = () => {
  return (
    <Layout form={true} sticky={false}>
      <Head>
        <title>Tu Carrito | Deco & Home</title>
      </Head>

      <main className="min-h-screen px-4 py-12 bg-gray-100">
        <CarritoView />
      </main>
    </Layout>
  );
};

export default CarritoPage;
